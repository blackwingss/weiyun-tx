import * as types from './mutation-types'

export default {
  [ types.GET_FILES ] (state, data) {
    let pictures = [],
        pdfs = [],
        musics = [],
        others = [],
        videos = [],
        allFiles = data
    state.files.allFiles = allFiles
    for (let item of data) {
      if (item['mime_type'].split('/')[0] === 'image') {
        pictures.push(item)
        state.files.pictures = pictures
        
      } else {
        switch (item['name'].split('.')[1]) {
          case 'mp4':
            videos.push(item)
            state.files.videos = videos
            break;
          case 'mp3':
            musics.push(item)
            state.files.musics = musics
            break;
          case 'pdf':
            pdfs.push(item)
            state.files.pdfs = pdfs
            break;        
          default:
            others.push(item)
            state.files.others = others
            break;
        }        
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
  },
  [ types.UPLOAD_FILE_SUCCESS ] (state, data) {
    state.upload_msg.push(data)
  },
  [ types.UPLOAD_FILE_FAIL ] (state, err) {
    state.upload_msg = err
  },
  [ types.HD_SW_UPLOAD_PANEL ] (state) {
    state.B_upload_panel = !state.B_upload_panel
  }
}