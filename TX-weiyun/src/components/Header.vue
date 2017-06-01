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
    <div class="w-header__search fl">
      <i class="icon icon-search"></i>
      <label>输入文件名</label>
      <input type="text" id="search">
      <span class="close">
        <i class="icon icon-close"></i>
      </span>
    </div>
    <div class="w-header__switcher">
      <div class="switcher-list">
        <div class="switcher-view">
          <span><i class="icon icon-list"></i></span>
          <span class="current"><i class="icon icon-thum">v</i></span>
        </div>
        <div class="switcher-rank">
          <span class="current"><i class="icon icon-ren"></i></span>
          <span><i class="icon icon-letter"></i></span>
        </div>
      </div>      
    </div>
    <div class="w-header__addbtn fr">
      <input id="_upload_html5_input" name="file" type="file" multiple="multiple" style="display: none;">
      <label for="_upload_html5_input">
        <div class="addbtn">
          <i class="icon icon-add"></i>
          <span class="addbtn-txt">
            添加
          </span>
        </div>
      </label>
    </div>
  </div>
</template>

<script>
import util from "../util/util.js";
export default {
  mounted () {
    util.focus()
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
      opacity: 0;
      border: none;
      outline: none;
      width: 93px;
      height: 20px;
      line-height: 17px;
      -webkit-border-radius: 20px;
      -moz-border-radius: 20px;
      border-radius: 20px;
      color: #a2a2a2;
      padding: 6px 0 8px 35px;
      transition: width .5s;
    }
    .close {
      display: none;
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
    position: absolute;
    left: 237px;
    right: 0;
    top: 0;
    bottom: 0;
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
    padding: 12px 0;
    margin: 0 40px 0 0;
    z-index: 3;
    .addbtn {
      padding: 0 45px;
      height: 36px;
      line-height: 36px;
      -webkit-border-radius: 20px;
      -moz-border-radius: 20px;
      border-radius: 20px;
      background-color: #00a4ff;
      color: #fff;
      text-align: center;
      cursor: pointer;
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
}
</style>
