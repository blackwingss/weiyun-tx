<template>
    <div id="app">
      <w-Header></w-Header>
      <w-Sider></w-Sider>
      <transition name="transfrom">
        <router-view class="router-view"></router-view>
      </transition>      
      <w-Upload class="w-upload"></w-Upload>
    </div>
</template>

<script>
import Header from '@/components/Header.vue';
import Sider from '@/components/Sider.vue';
import Upload from '@/components/Upload.vue';
import { mapGetters } from 'vuex';
export default {
  computed: {
    ...mapGetters({
      allFiles: 'getAllFiles'
    })
  },
  components: {
    'w-Header': Header,
    'w-Sider': Sider,
    'w-Upload': Upload
  },
  watch: {
    allFiles: function() {
      this.$store.dispatch('get_files')
    }
  },
  mounted () {
    this.$store.dispatch('get_files')
  } 
}
</script>

<style lang="scss">
@import './assets/css/reset.css';
#app {
  .router-view {
    box-sizing: border-box;
    width: 100%;
    height: 550px;
    overflow-y: auto;
    padding-left: 200px;
    opacity: 1;
    &.transfrom-enter, &.transform-leave-active{
      opacity: 0;
    }
    &.transfrom-enter-active, &.transform-leave-active{
      -webkit-transition: opacity .2s ease-in;
      -moz-transition: opacity .2s ease-in;
      transition: opacity .2s ease-in;
    }
  }
}
#all {
  .all-view {
    padding: 10px 30px;
    list-style: none;
    h2 {
      font-weight: 400;
      padding: 30px 0 10px 8px;       
    }
    .divider {
      width: 100%;
      height: 5px;
      margin-left: 8px;
      -webkit-border-radius: 4px;
      -moz-border-radius: 4px;
      border-radius: 4px;
      background-image: -webkit-linear-gradient(right, #f60,blue, red);
      background-image: -moz-linear-gradient(to right, #f60,blue, red);
      background-image: linear-gradient( to right, #f60,blue, red);;
    }
    .content {
      padding-top: 20px;
      position: relative;
      li.thum_view {
        position: relative;
        float: left;
        width: 75px;
        height: 90px;
        margin: 8px;
        .cover {
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
          text-align: center;
          background-color: rgba(0, 0, 0, .7);
          opacity: 0;
          transition: opacity .3s;
          cursor: pointer;
          line-height: 90px;          
        }        
        &:hover {
          .cover {
            color: #fff;
            opacity: 1;
          }
        }
        img, video {
          width: 100%;
          height: 100%;
        } 
      }
      li.list_view {
        position: relative;
        list-style-type: decimal;
        width: 100%;
        text-align: left;
        margin: 10px 8px;
        padding: 7px 0;
        line-height: 10px;     
        background-color: #f2f2f2;
        color: #000;        
        img {
          vertical-align: top;
          margin-left: 10px;
          width: 30px;
          height: 30px;
          display: inline-block;
        }
        .rightBtn {
            position: absolute;
            right: 40px;
            top: 17px;
            display: inline-block;
            &:hover {
              color: red;
            }
          }
        p{
          vertical-align: top;
          height: 30px;
          line-height: 30px;
          margin-left: 10px;
          display: inline-block;
        }
        .createdAt {
          position: absolute;
          right: 180px;
        }
        &:hover {
          cursor: pointer;
          background-color: rgba(0, 0, 0, .1);
        }
      }
    }    
  }
  
}

</style>
