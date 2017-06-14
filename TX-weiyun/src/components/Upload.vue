<template>
  <transition name="fadeIn">
  <div id="fullPop" v-show="B_upload_panel">    
    <div class="upload_panel">
      <form enctype="multipart/form-data" ref="form" >
        <input id="upload_input" name="fileInput" ref="fileContainer" @change="fileChange" type="file" multiple="multiple" style="display: none;">
      </form>
      <label for="upload_input">
        <div class="chooseFile">
          选择文件
        </div>
      </label>
      <div class="file_preview"> 
        <ul>
          <li v-for="file in localFiles">
            <img :src="file.url" v-show="file.type.split('/')[0] === 'image'" alt="">
            <p v-show="file.type.split('/')[0] !== 'image'">{{file.name}}</p>
            <div @click="delLocalfiles(file)" class="cover">删除</div>
          </li>
        </ul>
        <div class="tips" v-show="localFiles.length == 0">请选择文件</div>
      </div>
      <div class="btn-group clearfix"> 
        <span class="count">已选({{localFiles.length}})</span>          
        <div class="btn btn-cancel"  @click="hd_UploadPanel">取消</div>
        <div class="btn btn-submit" @click="onSubmit">确定</div>
        <div class="btn btn-clear" v-show="localFiles.length !== 0" @click="localFiles = []">清空选择</div>
      </div>
    </div>
  </div>
  </transition>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";
export default {
  data () {
    return {      
      localFiles: []
    }
  },
  computed: {
    ...mapGetters({
      B_upload_panel: 'getB_upload_panel'
    })
  },
  methods: {
    ...mapActions({
      hd_UploadPanel: 'hd_sw_UploadPanel'
    }),
    fileChange (e) {
      let files = e.target.files || e.dataTransfer.files
      let index = 1    
      for (let file of files) {
        let type =file.type
        let name = file.name        
        let url = window.URL.createObjectURL(file);
        let fileObj = {
          url,
          name,
          type,
          index
        }        
        this.localFiles.push(fileObj)
        index++
      }  
    },
    delLocalfiles (file) {
      let idx = this.localFiles.indexOf(file)
      this.localFiles.splice(idx, 1)
    },
    onSubmit () {  
      this.hd_UploadPanel()
      if (this.localFiles !== []) {
        let formData = new FormData(this.$refs.form)
        this.$store.dispatch('upload_file', formData)
        this.$refs.fileContainer.value = ''
        this.localFiles = []        
      }      
    }        
  }
}
</script>

<style lang="scss" scoped>
  #fullPop{
    position: fixed;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    background-color: rgba(0,0,0,.65);
    z-index: 1000;
    &.fadeIn-enter, &.fadeIn-leave-active {
      opacity: 0;
      transform: scale(3);
    }
    &.fadeIn-enter-active, &.fadeIn-leave-active {
      -webkit-transition: all .3s ease-in-out;
      -moz-transition: all .3s ease-in-out;
      transition: all .3s ease-in-out;
    }      
    .upload_panel {
      position: absolute;
      left: 50%;
      top: 50%;
      width: 450px;
      height: 320px;
      -webkit-border-radius: 6px;
      -moz-border-radius: 6px;
      border-radius: 6px;
      background-color: #fff;
      box-shadow: 0 0 12px rgba(15,32,65,.2);
      margin-left: -226px;
      margin-top: -159px;
      .file_preview {
        padding: 12px;
        ul{
          list-style: none;
          li {
            position: relative;
            float: left;
            width: 60px;
            height: 70px;
            margin: 3px;
            overflow: hidden;
            img {
              width: 100%;
              height: 100%;
            }
            p {
              font-size: 12px;
              text-align: center;
              word-break: break-all;
            }
            .cover {
              position: absolute;
              width: 100%;
              height: 100%;
              left: 0;
              top: 0;
              background-color: rgba(0,0,0,.65);
              color: red;
              line-height: 60px;
              text-align: center;
              opacity: 0;
              cursor: pointer;
              &:hover {
                opacity: 1;
                -webkit-transition: opacity .3s;
                -moz-transition: opacity .3s;
                transition: opacity .3s;
              }
            }
          }
        }
        .tips {
          text-align: center;
          width: 100%;
          margin-top: 50px;
        }
      }
      .chooseFile {
        padding: 7px 20px;
        -webkit-border-radius: 5px;
        -moz-border-radius: 5px;
        border-radius: 5px;
        box-shadow: 0 0 12px rgba(0,0,0,.2);
        text-align: center;
        cursor: pointer;
        &:hover {
          background-color: rgba(0,0,0,.2);
        }
      }
      .btn-group {
        position: absolute;
        bottom: 15px;
        left: 0;
        width: 100%;
        padding-top: 15px;
        border-top: 0.5px solid rgba(0,0,0,.2);
        .btn {
          float: right;
          margin-right: 20px;
          padding: 5px 15px;
          font-size: 12px;
          -webkit-border-radius: 4px;
          -moz-border-radius: 4px;
          border-radius: 4px;
          color: #fff;
          cursor: pointer;
          opacity: .8;
          &:hover {
            opacity: 1;
          }
        }
        .btn-clear {
          background-color: #ccc;
          margin-right: 130px;
        }
        .btn-submit {
          background-color: #3F51B5;          
        }
        .btn-cancel {
          background-color: #c72b2b;
        }
        .count {
          display: inline-block;
          padding-left: 10px;
        }
      }
    }
  }
    
</style>
