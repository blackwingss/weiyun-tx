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
content.getFiles = (req, res) => {
  const queryFiles = () => {
    return new Promise((resolve, reject) => {
      const query = new AV.Query('_File')
      query.descending('createdAt')
      const files = query.find()
      if (files) {
        resolve(files)
      } else {
        reject()
      }
    })
  }
  queryFiles()
    .then(files => {
      let filesArr = []
      for (let file of files) {
        let fileObj = {
          objectId: file.get('objectId'),
          url: file.get('url'),
          mime_type: file.get('mime_type'),
          name: file.get('name'),
          createdAt: file.get('createdAt')
        }    
        filesArr.push(fileObj)
      }
      res.send(filesArr)
    }).catch(new Error('Can not find'))
}
content.uploadFiles = (req, res) => {
  let form = new multiparty.Form();
  form.parse(req,  (err, fields, files) => {
    let allFiles = files.fileInput;
    for (let file of allFiles) {
      if (file.size !== 0) {  
        fs.readFile(file.path,  (err, data) => {
          if (err) {
            res.send('读取文件失败');
          }
          let theFile = new AV.File(file.originalFilename, data);
          theFile.save().then((thefile) => {
            res.send('上传成功')
          }).catch('服务器崩了');
        });
      } else {
        res.send('请选择一个文件。');
      }
    }    
  })  
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