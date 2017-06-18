import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex)

const state = {
 recordType:0,
}
export default new Vuex.Store({
  state,
  actions,
  mutations
})
