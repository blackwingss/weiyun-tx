/**
 * 所有 API 的路由
 * 
 * @author micelid
 */
const content = require('./content')

module.exports = (app) => {
  // 访问路由
  app.get('/', (req, res) => {
    res.render('index')
  })
  app.get('/weiyun', (req, res) => {
    res.render('weiyun')
  })
  app.get('/micelid', (req, res) => {
    res.render('micelid')
  })

  // api
  app.get('/api/getFiles', content.getFiles)
  app.post('/api/uploadFiles', content.uploadFiles)
}

