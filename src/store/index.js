import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentLocation: {
      parent: {
        title: '',
        route: ''
      },
      child: {
        title: '',
        route: ''
      }
    }
  },
  mutations: {
    setCurrentLocation: (state, location) => {
      state.currentLocation = location
    }
  },
  actions: {

  }
})
