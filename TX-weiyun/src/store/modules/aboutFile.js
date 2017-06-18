import {
  GET_FILES_SUCCESS,
  GET_FILES_FAIL,
  UPLOAD_FILE_SUCCESS,
  UPLOAD_FILE_FAIL,
  RESET_UPLOAD_MSG,
  PROGRESS,
  TRANSFORM_TASK
} from '../mutation-types'
import { API_ROOT } from '../../config'
import axios from 'axios'

const state = {
  allFiles: [],
  pictures: [],
  musics: [],
  pdfs: [],
  videos: [],
  others: [],
  errmsg: '',
  upload_msg: '',
  percent: 0,
  taskState: {
    taskCount: 0,
    hasTask: false
  }
}

const getters = {
  // 获取所有文件
  getAllFiles: state => state.allFiles,
  // 获取图片
  getPictures: state => state.pictures,
  // 获取音乐
  getMusics: state => state.musics,
  // 获取文档
  getPdfs: state => state.pdfs,
  // 获取视频
  getVideos: state => state.videos,
  // 获取其他
  getOthers: state => state.others,
  // 获取上传信息
  getUploadMsg: state => state.upload_msg,
  // 获取上传进度
  getPercent: state => state.percent,
  // 获取任务状态
  getTaskState: state => state.taskState
}

const actions = {
  // 获取服务器数据
  get_files: ({ commit }) => {
    axios.get(API_ROOT + '/api/getFiles')
      .then(res => res.data)
      .then(data => {
        commit(GET_FILES_SUCCESS, data)
      }, err => {
        commit(GET_FILES_FAIL, err)
      })
  },

  // 上传文件
  upload_file({ commit }, formData, config) {
    return new Promise((resolve, reject) => {
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
      // axios.post(API_ROOT + '/api/uploadFiles', formData, config)
      //   .then(res => {
      //     resolve('上传成功')
      //     commit(UPLOAD_FILE_SUCCESS, res.data)
      //   }, err => {
      //     resolve('上传失败')
      //     commit(UPLOAD_FILE_FAIL, err)
      //   })
    })
  }
}
const mutations = {
  // 获取所有文件
  [ GET_FILES_SUCCESS ](state, data) {
    let pictures = [],
        pdfs = [],
        musics = [],
        others = [],
        videos = [],
        allFiles = data
    state.allFiles = allFiles
    for (let item of data) {
      switch (item['mime_type'].split('/')[0]) {
        case 'image':
          pictures.push(item)
          state.pictures = pictures
          break;
        case 'audio':
          musics.push(item)
          state.musics = musics
          break;
        case 'application':
          switch (item['name'].split('.')[1]) {
            case 'mp4':
              videos.push(item)
              state.videos = videos
              break;
            case 'pdf':
              pdfs.push(item)
              state.pdfs = pdfs
              break;
            default:
              others.push(item)
              state.others = others
              break;
          }
          break;
        default:
          others.push(item)
          state.others = others
          break;
      }
    }
  },

  // 获取所有文件失败
  [ GET_FILES_FAIL ](state, err) {
    state.errmsg = err
  },
  // 上传文件成功
  [ UPLOAD_FILE_SUCCESS ](state, data) {
    state.upload_msg = data
  },

  // 上传文件失败
  [ UPLOAD_FILE_FAIL ](state, err) {
    state.upload_msg = err
  },
   // 重置上传信息
  [ RESET_UPLOAD_MSG ] (state) {
    state.upload_msg = ''
    state.taskState = {
      taskCount: 0,
      hasTask: false
    }
    state.percent = 0
  },
  [ PROGRESS ] (state, percent) {
    state.percent = percent
  },
  // 传输任务状态
  [ TRANSFORM_TASK ] (state, { taskCount, hasTask }) {
    state.taskState = { taskCount, hasTask }
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}