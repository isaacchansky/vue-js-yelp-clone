import Vue from 'vue'
import Vuex from 'vuex'

// Make vue aware of vuex
Vue.use(Vuex)

// We create an object to hold the initial state when
// the app starts up
const state = {
  // TODO: Set up our initial state
  query: {},
  loading: false,
  searchData: {}
}

// Create an object storing various mutations. We will write the mutation
const mutations = {
  SEARCH: function (state, params) {
    state.query = params
  },
  LOADING: function (state, isLoading) {
    state.loading = isLoading
  },
  'SEARCH:RESULT': function (state, searchData) {
    state.searchData = searchData
  }
}

// We combine the intial state and the mutations to create a vuex store.
// This store can be linked to our app.
export default new Vuex.Store({
  state,
  mutations
})
