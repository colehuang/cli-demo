import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      city:"beijing"
  },
  mutations: {
    changeCity(store,city){
      store.city = city
    }
  },
  actions: {
    
  }
})
