<template>
  <div id="w-sider">
    <div class="sider">
      <div class="w-sider__avatar">
      <span class="avatar">
        <img src="../assets/logo.png" alt="">
      </span>
      </div>
      <div class="w-sider__options">
        <div class="w-sider__vipbtn">
          开通会员
        </div>
        <ul class="options" ref="ul">
          <li class="option">
            <router-link to="/recent">     
              <i class="icon icon-ren"></i>
              <span class="option-text">最近</span>
            </router-link>
          </li>
          <li class="title">文件</li>
          <li class="option active">
            <router-link to="/">
              <i class="icon icon-all"></i>
              <span class="option-text">全部</span>
            </router-link>
          </li>
          <li class="option">
            <router-link to="/doc">
              <i class="icon icon-doc"></i>
              <span class="option-text">文档</span>
            </router-link>
          </li>
          <li class="option">
            <router-link to="/pic">
              <i class="icon icon-pic"></i>
              <span class="option-text">图片</span>
            </router-link>
          </li>
          <li class="option">
            <router-link to="/video">
              <i class="icon icon-video"></i>
              <span class="option-text">视频</span>
            </router-link>
          </li>
          <li class="option">
            <router-link to="/note">
              <i class="icon icon-note"></i>
              <span class="option-text">笔记</span>
            </router-link>
          </li>
          <li class="option">
            <router-link to="/music">
              <i class="icon icon-music"></i>
              <span class="option-text">音乐</span>
            </router-link>
          </li>
          <li class="title">照片</li>
          <li class="option">
            <router-link to="/time">
              <i class="icon icon-time"></i>
              <span class="option-text">时间</span>
            </router-link>
          </li>
          <li class="title">我的</li>
          <li class="option">
            <router-link to="/safebox">
              <i class="icon icon-add-safebox"></i>
              <span class="option-text">保险箱</span>
            </router-link>
          </li>
          <li class="option">
            <router-link to="/share">
              <i class="icon icon-share"></i>
              <span class="option-text">分享链接</span>
            </router-link>
          </li>
          <li class="option">
            <router-link to="/trash">
              <i class="icon icon-trash"></i>
              <span class="option-text">回收站</span>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted () {
    let items = Array.from(this.$refs.ul.childNodes)
    items.map(item => {
      if (/option/.test(item.className)) {
        item.addEventListener('click', function() {
          items.forEach(item => {
            if(/option/.test(item.className))
            item.className = 'option'
          })
          this.className += ' active'
        })
      }
    })
  }
}
</script>

<style lang="scss" scoped>
#w-sider {
  width: 199px;
  border-right: 1px solid #E6E7EC;
  .sider {
    .w-sider__avatar {
      .avatar {
        display: block;
        width: 60px;
        height: 60px;     
        background: #fff;
        -webkit-border-radius: 50%;
        -moz-border-radius: 50%;
        border-radius: 50%;
        margin: 0 auto;
        overflow: hidden;
        padding-top: 28px;
        img {
          width: 100%;
          height: 100%;
        }
      }  
    }
    .w-sider__options {
      height: 457px;
      padding-top: 10px;
      overflow-y: auto;
      .w-sider__vipbtn {
        display: block;
        width: 92px;
        text-align: center;
        margin: 6px auto 20px;
        height: 28px;
        line-height: 28px;
        padding: 0;
        font-size: 14px;
        color: #00A4FF;
        border: 1px solid #3B93FF;
        border-radius: 45px;
        outline: 0;
        background-color: transparent;
        cursor: pointer;
        &:hover {
          background-color: #3B93FF;
          color: #fff;
        }
      }
      .options {
        margin-top: 6px;
        margin-bottom: 20px;
        .title {
          padding: 0 0 0 64px;
          color: #74787C;
          height: 28px;
          line-height: 28px;
        }
        li {
          position: relative;
          height: 32px;
          line-height: 32px;
          display: block;
          color: #020202;
          a {
            width: 100%;
            height: 100%;
            padding-left: 60px;
            display: block;
          }
          .icon {
            width: 24px;
            height: 24px;
            margin-right: 10px;
          }
          .icon-ren {
            background-position: -250px -912px;
          }
          .icon-all {
            background-position: -175px -912px;
          }
          .icon-doc {
            background-position: -75px -937px;
          }
          .icon-pic {
            background-position: -725px -912px;
          }
          .icon-video {
            background-position: -600px -912px;
          }
          .icon-note {
            background-position: -550px -912px;
          }
          .icon-music {
            background-position: -375px -912px;
          }
          .icon-time {
            background-position: -25px -937px;
          }
          .icon-add-safebox {
            background-position: -950px -912px;
          }
          .icon-share {
            background-position: -850px -912px;
          }
          .icon-trash {
            background-position: -900px -912px;
          }
        }
        .option {
          .option-text {
            vertical-align: middle;
          }
          &:hover {
            background: #F4F9FF;
            transition: ease all;
            transition-duration: .3s;
            cursor: pointer;
          }
          &.active {
            color: #3B93FF;                  
            .icon-ren {
              background-position: -200px -912px;
            }
            .icon-all {
              background-position: -1002px -871px;
            }
            .icon-doc {
              background-position: -750px -912px;
            }
            .icon-pic {
              background-position: -625px -912px;
            }
            .icon-video {
              background-position: -575px -912px;
            }
            .icon-note {
              background-position: -425px -912px;
            }
            .icon-music {
              background-position: -50px -937px;
            }
            .icon-time {
              background-position: 0 -937px;
            }
            .icon-add-safebox {
              background-position: -975px -912px;
            }
            .icon-share {
              background-position: -875px -912px;
            }
            .icon-trash {
              background-position: -925px -912px;
            }
          }
        }
      }
    }
  }  
}
</style>
