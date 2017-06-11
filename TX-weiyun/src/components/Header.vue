<template>
  <div id="w-header">
    <h1 class="w-header__logo fl">
      <router-link to="/">
        腾讯微云
      </router-link>      
    </h1>
    <div class="w-header__taskbtn fl">
      <i class="icon icon-task"></i>
    </div>
    <div class="w-header__search fl" :class="{'active': !searchState}">
      <i class="icon icon-search"></i>
      <label v-show="searchState">输入文件名</label>
      <input type="text" id="search" :class="{'active': !searchState}" @focus="searchState = false" @blur="blur">
      <span class="close" v-show="!searchState">
        <i class="icon icon-close"></i>
      </span>
    </div>
    <div class="w-header__switcher">
      <div class="switcher-list">
        <div class="switcher-view">
          <span @click="changeListView" :class="{'current': isView}"><i class="icon icon-list"></i></span>
          <span @click="changeThumView" :class="{'current': !isView}"><i class="icon icon-thum"></i></span>
        </div>
        <div class="switcher-rank">
          <span class="current"><i class="icon icon-ren"></i></span>
          <span><i class="icon icon-letter"></i></span>
        </div>
      </div>      
    </div>
    <div class="w-header__addbtn fr" @mouseenter="showUpload = true" @mouseleave="showUpload = false">
      <form enctype="multipart/form-data" ref="form">
        <input type="text" name="currUrl" style="display:none">
        <input id="_upload_html5_input" ref="fileContainer" @change="showSubmit = true" name="fileInput" type="file" multiple="multiple" style="display: none;">
      </form>
      <div class="addbtn">
        <i class="icon icon-add"></i>
        <span class="addbtn-txt">
          添加
        </span>
      </div> 
    </div>
    <div class="w-header__fullPop" v-show="showSubmit">
      <div class="fullPop">
        <button @click="upload">上传</button>
        <span @click="showSubmit = false">X</span>
        <p>{{msg}}</p>
        <h2>{{tips}}</h2>
        <div :style="{width: oWidth + 'px'}" style="height: 5px;background-color: #f60"></div>
      </div>
    </div>
    <transition name="fadeInUp">
      <div class="w-header__upload-panel" v-show="showUpload" @mouseenter="showUpload = true" @mouseleave="showUpload = false">
        <ul class="upload_dropdown clearfix">
          <li class="upload_item">
            <label for="_upload_html5_input">
              <div class="inner">
                <span class="icon icon-upload icon-upload-file"></span>
                <p class="txt">上传文件</p>
              </div>          
            </label>
          </li>
          <li class="upload_item">
            <label for="_upload_html5_input">
              <div class="inner">
                <span class="icon icon-upload icon-upload-dir"></span>
                <p class="txt">上传文件夹</p>
              </div>          
            </label>
          </li>        
          <li class="upload_item">
            <label for="_upload_html5_input">
              <div class="inner">
                <span class="icon icon-upload icon-offline-download"></span>
                <p class="txt">离线下载</p>
              </div>          
            </label>
          </li>
          <li class="upload_item">
            <label for="_upload_html5_input">
              <div class="inner">
                <span class="icon icon-upload icon-create-dir"></span>
                <p class="txt">创建文件夹</p>
              </div>          
            </label>
          </li>
          <li class="upload_item">
            <label for="_upload_html5_input">
              <div class="inner">
                <span class="icon icon-upload icon-add-note"></span>
                <p class="txt">添加笔记</p>
              </div>          
            </label>
          </li>
        </ul>   
        <div class="trangle">
          <span class="arrow-border"></span>
          <span class="arrow"></span>
        </div>      
      </div>
    </transition>
  </div>
</template>

<script>
import { API_ROOT } from '../config.js';
import { mapGetters } from 'vuex';
export default {
  data () {
    return {
      showUpload: false,
      searchState: true,
      showSubmit: false,
      isView: false,
      oWidth: 1,
      timer: null,
      tips: ''
    }
  },
  computed: {
    ...mapGetters({
      msg: 'getUploadMsg'
    })
  },
  watch: {
    msg: function() {
      clearInterval(this.timer)
      this.oWidth = 1
      this.$store.dispatch('get_files')
    }
  },
  methods: {
    blur (e) {
      e.target.value = ''   
      this.searchState = true
    },
    changeListView () {
      this.isView = true
      this.$store.dispatch('changeListView')
    },
    changeThumView () {
      this.isView = false
      this.$store.dispatch('changeThumView')
    },
    upload () {  
      if (this.$refs.fileContainer.value !== '') {
        this.uploading()
        let formData = new FormData(this.$refs.form)
        this.$store.dispatch('upload_file', formData)
        this.$refs.fileContainer.value = ''
      } else {
        this.tips = '请选择文件'
      }             
    },
    uploading () {
      this.timer = setInterval(() => {
        this.oWidth++
      }, 100)
    }
  }
}
</script>

<style lang="scss" scoped>
#w-header {
  position: relative;
  height: 60px;
  background: #F5F6F9;
  border-bottom: 1px solid #E6E7EC;
  .w-header__logo {
    a {
      display: block;
      width: 92px;
      height: 31px;
      margin: 14px 0 0 53px;
      background-image: url(https://qzonestyle.gtimg.cn/qz-proj/wy-pc/css/sprite/page-home-kie170524112741.png);
      background-position: -912px -205px;
      line-height: 100px;
      overflow: hidden;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
  .w-header__taskbtn {
    position: relative;
    margin: 12px 0 0 95px;
    width: 34px;
    height: 34px;
    border-radius: 100%;
    border: 1px solid #D5D7DF;
    text-align: center;
    background: #fff;
    .icon-task {
      background-position: -525px -912px; 
      width: 24px;
      height: 24px;
      left: 50%;
      top: 50%;
      position: absolute!important;
      margin: -12px 0 0 -12px;
    }
  }
  .w-header__search {
    position: relative;
    margin: 12px 0 0 22px;
    padding-right: 30px;
    display: inline-block;
    background-color: #fff;
    border: 1px solid #D5D7DF;
    border-radius: 20px;
    z-index: 3;
    .icon-search {
      position: absolute;
      width: 24px;
      height: 24px;
      left: 10px;
      top: 50%;
      margin: -12px 0 0;
      z-index: 5;
      background-position: -400px -912px;
    }
    label {
      display: inline-block;
      position: absolute;
      left: 38px;
      top: 10px;
      height: 13px;
      line-height: 17px;
      color: #A2A2A2;
      transition: opacity .5s;
    }
    input {
      position: relative;
      border: none;
      outline: none;
      width: 93px;
      height: 20px;
      background-color: transparent;
      line-height: 17px;
      -webkit-border-radius: 20px;
      -moz-border-radius: 20px;
      border-radius: 20px;
      color: #a2a2a2;
      padding: 6px 0 8px 35px;
      transition: width .5s;
      &.active {
        width: 150px;
      }
    }
    .close {
      position: absolute;
      right: 0;
      top: 0;
      bottom: 0;
      text-align: center;
      width: 36px;
      z-index: 5;
      transition: display .5s;
      .icon-close {
        position: absolute;
        width: 24px;
        height: 24px;
        left: 50%;
        top: 50%;
        margin: -12px 0 0 -12px;
        background-position: -1034px -145px;
      }
    }
    &:hover, &.active {
      border: 1px solid #3B93FF;
      .icon-search {
        background-position: -350px -912px;
      }
    }
  }
  .w-header__switcher {
    float: left;
    margin-left: 224px;
    text-align: center;   
    .switcher-list {
      display: inline-block;
      margin: 12px 0 0;
      .switcher-view, .switcher-rank {
        position: relative;
        float: left;
        height: 34px;
        line-height: 34px;
        width: 95px;
        border: 1px solid #D5D7DF;
        margin: 0 10px;
        border-radius: 20px;
        overflow: hidden;
        span {
          position: relative;
          width: 50%;
          height: 100%;
          float: left;
          text-align: center;
          background: #fff;
          cursor: pointer;
          &.current {
            background: #EEEEF2;
            box-shadow: 0 1px 2px rgba(15,32,66,.06) inset;
          }
          .icon-list,.icon-thum,.icon-ren,.icon-letter {
            width: 24px;
            height: 24px;
            position: absolute;
            left: 50%;
            top: 50%;
            margin: -12px 0 0 -12px;
          }
          .icon-list {
            background-position: -325px -912px;
          }
          .icon-thum {
            background-position: -300px -912px;
          }
          .icon-ren {
            background-position: -250px -912px;
          }
          .icon-letter {
            background-position: -275px -912px;
          }
        }
      }
    }
  }
  .w-header__addbtn {
    position: relative;
    float: right;
    height: 100%;
    margin: 0 40px 0 0;
    z-index: 3;
    .submitPanel {
      position: absolute;
      width: 400px;
      height: 300px;
      top: 150px;
      right: 100px;
      border-radius: 5px;
      background-color: #fff;
      box-shadow: 0 0 10px rgba(0,0,0,.4);
      input {
        border: none;
        outline: none;
        margin: 0 auto;
      }
    }
    .addbtn {
      padding: 0 45px;
      height: 36px;
      margin-top: 12px;
      line-height: 36px;
      -webkit-border-radius: 20px;
      -moz-border-radius: 20px;
      border-radius: 20px;
      background-color: #00a4ff;
      color: #fff;
      text-align: center;
      cursor: pointer;
      &:hover {
        background-color: #00a4ff;
        opacity: .7;
      }
      .icon {
        margin: 0 6px 0 -3px;
        top: -1px;
      }
      .icon-add {
        width: 24px;
        height: 24px;
        overflow: hidden;
        background-position: -997px -827px;
      }
      .addbtn-txt {
        position: relative;
        top: -1px;
        vertical-align: middle;
      }
    }    
  }
  .w-header__upload-panel {
    position: absolute;
    right: 10px;
    top: 60px;
    box-sizing: border-box;
    background-color: #fff;
    -webkit-border-radius: 2px;
    -moz-border-radius: 2px;
    border-radius: 2px;
    z-index: 10;
    border: 1px solid #c8ccd3;
    box-shadow: 0 1px 4px 0 rgba(15,32,65,.2);
    width: 320px;
    &.fadeInUp-enter,&.fadeIn-leave-active {
      transform: translateY(-5px);
    }
    &.fadeInUp-enter-active,&.fadeIn-leave-active {
      -webkit-transition: transform .3s;
      -moz-transition: transform .3s;
      transition: transform .3s;
    }
    /*下拉框*/
    .upload_dropdown {
      .upload_item {
        float: left;
        width: 33.33333%;
        box-sizing: border-box;
        padding: 29px 0 20px;
        cursor: pointer;
        &:hover {
          background-color: rgba(59,147,255,.06);
          .icon-upload-file {
            background-position: -428px -251px;
          }
          .icon-upload-dir {
            background-position: -247px -192px;
          }
          .icon-offline-download {
            background-position: -275px -251px;
          }
          .icon-create-dir {
            background-position: -173px -251px;
          }
          .icon-add-note {
            background-position: -224px -251px;
          }
        }
        .inner {
          text-align: center;
          font-size: 14px;
          color: #000;
          cursor: pointer;
          .icon-upload {
            width: 50px;
            height: 50px;
            background-image: url(https://qzonestyle.gtimg.cn/qz-proj/wy-pc/css/sprite/page-home-delay-170602173531.png);
            background-repeat: no-repeat;
          }
          .icon-upload-file {
            background-position: -349px -192px;
          }
          .icon-upload-dir {
            background-position: -122px -251px;
          }
          .icon-offline-download {
            background-position: -298px -192px;
          }
          .icon-create-dir {
            background-position: -326px -251px;
          }
          .icon-add-note {
            background-position: -377px -251px;
          }
          .txt {
            margin-top: 13px;
          }
        }
      }
    }
    /*三角*/
    .arrow-border, .arrow{
      position: absolute;
      width: 0;
      height: 0;
      bottom: 100%;
      left: 64%;        
      border: solid transparent;        
      font-weight: 400;
    }
    .arrow-border {
      border-width: 9px 8px;
      border-bottom-color: #c8ccd3;
    }
    .arrow{
      border-width: 8px 7px;
      margin-left: 1px;
      border-bottom-color: #fff;
    }
  }
  .w-header__fullPop {
    position: fixed;
    width: 100%;
    height: 1000px;
    left: 0;
    top: 0;
    background-color: rgba(255,255,255,.65);
    z-index: 1000;
    .fullPop {
      position: fixed;
      left: 50%;
      top: 50%;
      width: 450px;
      height: 320px;
      background-color: #fff;
      box-shadow: 0 0 12px rgba(15,32,65,.2);
      margin-left: -226px;
      margin-top: -159px;
    }
  }  
}
</style>
