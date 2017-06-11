export default {
  // get files
  getPictures: state => state.files.pictures,

  getMusics: state => state.files.musics,

  getPdfs: state => state.files.pdfs,
  
  getVideos: state => state.files.videos,

  getOthers: state => state.files.others,

  getIsView: state => state.isView,
  getUploadMsg: state => state.upload_msg
}