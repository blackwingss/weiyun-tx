import {
  CHANGE_LIST_VIEW,
  CHANGE_THUM_VIEW,
  HD_SW_UPLOAD_PANEL,
  RESET_UPLOAD_MSG  
} from '../mutation-types'

const state = {
  bView: false,
  B_upload_panel: false
}

const getters = {
  // 获取视图状态
  getBview: state => state.bView,
  
  // 获取上传面板状态
  getB_upload_panel: state => state.B_upload_panel
}
const actions = {
 
}
const mutations = {
  // 列表视图
  [ CHANGE_LIST_VIEW ] (state) {
    state.bView = false
  },

  // 缩略图视图
  [ CHANGE_THUM_VIEW ] (state) {
    state.bView = true
  },
  // 隐藏/显示上传面板
  [ HD_SW_UPLOAD_PANEL ] (state) {
    state.B_upload_panel = !state.B_upload_panel
  }  
}

export default {
  state,
  getters,
  actions,
  mutations
}