import * as types from './mutation-types'
import { API_ROOT } from '../../config'
import axios from 'axios'

export default {
  get_todos ({ commit }) {
    axios.get(API_ROOT + '/api/todos')
      .then(res => res.data)
      .then(res => {
        commit(types.GET_TODOS, res)
      }, err => {
        commit(types.GET_TODOS_FAIL, err)
      })
  },
  upload ({ commit }, localPath) {
    axios.post(API_ROOT + '/api/upload', {localPath: localPath})
    .then(res => {
      commit(types.UPLOAD_FILE, res.data)
    }).catch(err => {
      commit(types.UPLOAD_FILE_FAIL, err)
    })
  }
} 