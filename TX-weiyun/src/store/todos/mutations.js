import * as types from './mutation-types'

export default {
  [ types.GET_TODOS ] (state, data) {
    state.todos = data
  },
  [ types.GET_TODOS_FAIL ] (state, err) {
    state.errMsg = err
  }
}