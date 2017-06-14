export default {
  // get files

  getAllFiles: state => state.files.allFiles,

  getPictures: state => state.files.pictures,

  getMusics: state => state.files.musics,

  getPdfs: state => state.files.pdfs,
  
  getVideos: state => state.files.videos,

  getOthers: state => state.files.others,

  getIsView: state => state.isView,
  getUploadMsg: state => state.upload_msg,

  getB_upload_panel: state => state.B_upload_panel
}