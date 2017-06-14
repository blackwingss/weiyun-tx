import * as types from './mutation-types'
import { API_ROOT } from '../../config'
import Vue from 'vue'
import axios from 'axios'

export default {
  get_files: ({ commit }) => {
    axios.get(API_ROOT + '/api/getFiles')
      .then(res => res.data)
      .then(data => {
        commit(types.GET_FILES, data)
      }, err => {
        commit(types.GET_FILES_FAIL, err)
      })
  },
  changeListView ({ commit }) {
    commit(types.CHANGE_LIST_VIEW)
  },
  changeThumView ({ commit }) {
    commit(types.CHANGE_THUM_VIEW)
  },
  upload_file ({ commit }, formData) {
    return new Promise((resolve, reject) => {
      axios.post(API_ROOT + '/api/uploadFiles', formData)
        .then(res => {
          resolve('上传成功')
          commit(types.UPLOAD_FILE_SUCCESS, res.data)
        }, err => {
          resolve('上传失败')
          commit(types.UPLOAD_FILE_FAIL, err)
        })
    })    
  },
  hd_sw_UploadPanel ({ commit }) {
    commit(types.HD_SW_UPLOAD_PANEL)
  },
  resetUploadMsg ({ commit }) {
    commit(types.RESET_UPLOAD_MSG)
  },
  transformTask ({ commit }, { taskCount, hasTask }) {
    commit(types.TRANSFORM_TASK, { taskCount, hasTask })
  }
} 