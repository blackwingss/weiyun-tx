/**
 * 所有配置
 * 
 * @author micelid
 */

'use strict'

let config = {
  // 服务端 host
  host: 'http://localhost:3000',

  // web开发环境的 host
  webHost: 'http://localhost:8080',

  // 跨域白名单
  whiteOrigins: [
    'http://localhost:8080',
    'http://localhost:3000',
    'http://stg-micelid.leanapp.cn',
    'http://micelid.leanapp.cn'
  ]
}

// 判断环境
switch (process.env.LC_APP_ENV) {
  // 当前环境为线上测试环境
  case 'stage':
    config.host = 'http://stg-micelid.leanapp.cn'
    config.webHost = 'http://stg-micelid.leanapp.cn'
  break;
  // 当前环境为线上正式运行的环境
  case 'production':
    config.host = 'http://micelid.leanapp.cn'
    config.webHost = 'http://micelid.leanapp.cn'
  break;
}

module.exports = config
