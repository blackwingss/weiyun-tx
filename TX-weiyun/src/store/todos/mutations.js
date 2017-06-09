import * as types from './mutation-types'

export default {
  [ types.GET_FILES ] (state, data) {
    let pictures = [],
        docs = [],
        pdfs = []
    for (let item of data) {
      switch(item['mime_type'].split('/')[0]) {
        case 'image':
          pictures.push(item)
          state.pictures = pictures
        break;
        case 'application':
          switch (item['mime_type'].split('/')[1]) {
            case 'pdf':
              pdfs.push(item)
              state.pdfs = pdfs
              break;
            case 'x-javascript':
              docs.push(item)
              state.docs = docs
              break
            default:
              break;
          }          
        break;
        default:
        break;
      }
    }

  },
  [ types.GET_FILES_FAIL ] (state, err) {
    state.errmsg = err
  },
  [ types.CHANGE_LIST_VIEW ] (state) {
    state.isView = false
  },
  [ types.CHANGE_THUM_VIEW ] (state) {
    state.isView = true
  }
}