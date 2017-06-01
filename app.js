/**
 * 入口文件
 * 
 * @author micelid
 */

'use strict'

const domain = require('domain')
const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const AV = require('leanengine')

const app = express()

// babel 编译
require('babel-core/register')

// 各个模块
const apiRouter = require('./router/api-router')
const tool = require('./util/tool')
const config = require('./config/config')

// 设置 view 引擎
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

// 静态资源路径
app.use(express.static(path.join(__dirname, 'public')))

// 使用 LeanEngine 中间件
app.use(AV.express())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: false
}))
app.use(cookieParser())

// 未处理异常捕获
app.use((req, res, next) => {
  let d = domain.create()
  d.add(req)
  d.add(res)
  d.on('error', (err) => {
    console.error('uncaughtException url=%s, msg=%s', req.url, err.stack || err.message || err)
    if (!res.finished) {
      res.statusCode = 500
      res.setHeader('content-type', 'application/json;charset=UTF-8')
      res.end('未知捕获')
    }
  })
  d.run(next)
})

// 跨域支持
app.all('/api/*', (req, res, next) => {
  const origin = req.headers.origin
  if (config.whiteOrigins.indexOf(origin) !== -1) {
    res.header('Access-Control-Allow-Origin', origin)
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
    res.header('Access-Control-Allow-Credentials', true)
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, OPTIONS, DELETE')
  }
  next()
})

// 路由
app.use('/', apiRouter)
app.use('/weiyun', apiRouter)
app.use('/micelid', apiRouter)
// api
app.use('/api', apiRouter)

// 如果任何路由都没有匹配到，则认为是 404
// 生成一个异常让后面的 err handle 捕获
// app.use((req, res, next) => {
//   res.sendFile(path.dirname(require.main.filename) + '/public/index.html')
//   // res.status(404)
// })

module.exports = app