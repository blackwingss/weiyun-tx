import * as types from './mutation-types'

export default {
  [ types.GET_TODOS ] (state, data) {
    state.todos = data
  },
  [ types.GET_TODOS_FAIL ] (state, err) {
    state.errMsg1 = err
  },
  [ types.UPLOAD_FILE ] (state, data) {
    state.msg = data
  },
  [ types.UPLOAD_FILE_FAIL ] (state, err) {
    state.errMsg2 = err
  }
}