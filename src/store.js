import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    music:{
      name: "12312",
      singer: "你好",
    }
  },
  mutations: {
    editMusic(state, obj){
      state.music.name = obj.name
      state.music.singer = obj.singer
    }
  },
  actions: {

  }
})
