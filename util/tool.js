/**
 * 一些工具方法
 * 
 * @author micelid
 */

'use strict'

let pub = {}

pub.l = (msg) => {
  console.log('\n\n', msg, '\n\n')
}

pub.fail = (res, err) => {
  res.status(err.status).send({
    err: err.status,
    msg: err.msg
  })
}

module.exports = pub