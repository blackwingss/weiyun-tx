/**
 * 所有 API 的路由
 * 
 * @author micelid
 */

'use strict'

const router = require('express').Router()
const multiparty = require('multiparty');
const fs = require('fs')
const AV = require('leanengine')
const tool = require('../util/tool')

let content = {}

// api es7 async
  // content.getTodos = async (req, res) => {
  //   const queryTodos = () => {
  //     const query = new AV.Query('Todo')
  //     query.descending('createdAt')
  //     return query.find()
  //   }
  //   try {
  //     const data = await queryTodos()
  //     if (data) {
  //       let arr = []
  //       for (let item of data) {
  //         let result = {}
  //         result.objectId = item.get('objectId')
  //         result.content = item.get('content')
  //         result.ACL = item.get('ACL')
  //         result.createdAt = item.get('createdAt').Format('yyyy-MM-dd hh:mm:ss')
  //         arr.push(result)
  //       }
  //       res.send(arr)
  //     } else {
  //       throw new Error('Can not find.')
  //     }    
  //   }
  //   catch (error) {
  //     tool.l(error)
  //   }  
  // }
// es6 Promise
content.getTodos = (req, res) => {
  const queryTodo = () => {
    return new Promise((resolve, reject) => {
      const query = new AV.Query('Todo')
      query.descending('createdAt')
      const data = query.find()
      if (data) {
        resolve(data)
      } else {
        reject()
      }
    })
  }
  queryTodo()
    .then(data => {
      let dataArr = []
      for (let item of data) {
        let result = {
          objectId: item.get('objectId'),
          content: item.get('content')
        }
        dataArr.push(result)
      }
      res.send(dataArr)
    }).catch(new Error('Can not find'))
}
content.upload = (req, res) => {
  var form = new multiparty.Form();
  form.parse(req, function (err, fields, files) {
    var iconFile = files.iconImage[0];
    if (iconFile.size !== 0) {
      fs.readFile(iconFile.path, function (err, data) {
        if (err) {
          return res.send('读取文件失败');
        }
        var theFile = new AV.File(iconFile.originalFilename, data);
        theFile.save().then(function (theFile) {
          res.send('上传成功！');
        }).catch(console.error);
      });
    } else {
      res.send('请选择一个文件。');
    }
  });
  
}

// 对Date的扩展，将 Date 转化为指定格式的String
// 月(M)、日(d)、小时(h)、分(m)、秒(s)、季度(q) 可以用 1-2 个占位符， 
// 年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字) 
// 例子： 
// (new Date()).Format("yyyy-MM-dd hh:mm:ss.S") ==> 2006-07-02 08:09:04.423 
// (new Date()).Format("yyyy-M-d h:m:s.S")      ==> 2006-7-2 8:9:4.18 
Date.prototype.Format = function (fmt) { //author: meizz 
  var o = {
    "M+": this.getMonth() + 1, //月份 
    "d+": this.getDate(), //日 
    "h+": this.getHours(), //小时 
    "m+": this.getMinutes(), //分 
    "s+": this.getSeconds(), //秒 
    "q+": Math.floor((this.getMonth() + 3) / 3), //季度 
    "S": this.getMilliseconds() //毫秒 
  };
  if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
  for (var k in o)
    if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
  return fmt;
}

module.exports = content