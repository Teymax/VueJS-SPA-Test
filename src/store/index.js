import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import actions from './actions'
import mutations from './mutations'

Vue.use(Vuex)

const initialState = {
  services: ['Service 1', 'Service 2', 'Service 3'],
  items: [],
  item: {
    title: '',
    service: '',
    quantity: '',
    unit_cost: ''
  }
}

export default new Vuex.Store({
  state: initialState,
  getters,
  actions,
  mutations
})
