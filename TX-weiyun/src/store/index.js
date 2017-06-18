import Vue from 'vue'
import Vuex from 'vuex'
// module
import aboutFile from './modules/aboutFile'
import aboutState from './modules/aboutState'


Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    aboutFile,
    aboutState
  } 
})