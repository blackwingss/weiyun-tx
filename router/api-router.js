/**
 * 所有 API 的路由
 * 
 * @author micelid
 */

'use strict'

const router = require('express').Router()

// 添加一个模块
const content = require('./content')

// 访问路由
router.get('/', content.index)
router.get('/weiyun', content.weiyun)
router.get('/micelid', content.micelid)
// api
router.get('/todos', content.todos)

module.exports = router