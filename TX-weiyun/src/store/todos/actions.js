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
    axios.post(API_ROOT + '/api/uploadFiles', formData)
      .then(res => {
        commit(types.UPLOAD_FILE_SUCCESS, res.data)
      }, err => {
        commit(types.UPLOAD_FILE_FAIL, err)
      })
  }
} 