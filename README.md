UI参照腾讯微云，开发支持感谢FatDong大神的博客源码：[VueBlog](https://github.com/FatDong1/VueBlog)。本次项目只实现了文件上传，上传进度条，视图切换功能，后台接口独立开发。旨在学习：
## 前端
1. 中大型项目中的vuex模块化管理
![](http://upload-images.jianshu.io/upload_images/2795762-fa9594bd1a5e5173.PNG?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

2. 基于Promise的axios发送/请求数据
![](http://upload-images.jianshu.io/upload_images/2795762-50dc5e8811fcbaa2.PNG?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

3. 在实际项目中使用Promise解决异步问题

4. vue-router的基本使用

5. 组件及Page的概念
![](http://upload-images.jianshu.io/upload_images/2795762-803fdd5ed3b1e1f3.PNG?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

6. 生产环境和开发环境的域名配置  
![](http://upload-images.jianshu.io/upload_images/2795762-a961f4082b0d1f77.PNG?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

7. 前端项目打包到Node静态文件夹
![](http://upload-images.jianshu.io/upload_images/2795762-bf49ebaaa7f42432.PNG?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


## 后端
1. Node.js后端接口的开发（响应获取和上传）
![](http://upload-images.jianshu.io/upload_images/2795762-b690edadf723a1f0.PNG?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

2. leancloud数据的读取与存储
![](http://upload-images.jianshu.io/upload_images/2795762-f01ba46d9656ff4a.PNG?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

3. async/await处理异步
![](http://upload-images.jianshu.io/upload_images/2795762-398ea961607a2bb4.PNG?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

4. 开发环境的跨域问题
![](http://upload-images.jianshu.io/upload_images/2795762-112b1309232cd561.PNG?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

## 遇到的问题
1. 开发环境8080端口请求3000端口引起的跨域问题
解决办法：配置跨域白名单，允许这个两个端口跨域请求
~~~
// 跨域白名单 (config.js)
  whiteOrigins: [
    'http://localhost:8080',
    'http://localhost:3000',
    'http://stg-micelid.leanapp.cn',
    'http://micelid.leanapp.cn'
  ]
// 跨域支持（app.js）
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
~~~

2. 侧边栏选项点击效果的制作
解决办法：通过判断url给当前点击选项动态添加active类
~~~
// 若当前url为：http://localhost:8080/#/pic, hash为： /pic
location = window.location.hash.split('/')[1] //pic
// 选项添加active类
<li class="option" :class="location === 'pic' ? 'active' : ''">
     <router-link to="/pic">
          <i class="icon icon-pic"></i>
          <span class="option-text">图片</span>
      </router-link>
 </li>
~~~
3. 上传面板的表单Ajax请求问题
解决办法：使用表单对象，直接发送封装好的表单，由后台解析。
~~~
// 封装formData
let formData = new FormData(this.$refs.form)
this.$store.dispatch('upload_file', formData)
// 后台引入multiparty解析请求的表单
let form = new multiparty.Form();
  form.parse(req,  (err, fields, files) => {...})
~~~
4. 进度条实现
解决办法： 原生progress标签+axios的onUploadProgress回调
~~~
axios({
        method: 'post',
        url: API_ROOT + '/api/uploadFiles',
        data: formData,
        onUploadProgress: function (progressEvent){
          let percent = Math.round((progressEvent.loaded * 100) / progressEvent.total - 1)
          commit(PROGRESS, percent)
        },        
      }).then(res => {        
        resolve('上传成功')        
        commit(UPLOAD_FILE_SUCCESS, res.data)
        }, err => {
          resolve('上传失败')
          commit(UPLOAD_FILE_FAIL, err)
        })
~~~

[线上地址](http://micelid.leanapp.cn/)

项目独立完成，诚请大佬提出建议。