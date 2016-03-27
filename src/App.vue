<template>
  <div id="app">
    <Search></Search>
    <Business-Collection :data="searchData"></Business-Collection>
    <p v-show="isLoading">
      loading...
    </p>
  </div>
</template>

<script>
import Search from './components/Search'
import BusinessCollection from './components/BusinessCollection'
import store from './vuex/store'

export default {
  components: {
    Search,
    BusinessCollection
  },
  vuex: {
    getters: {
      searchData: state => state.searchData,
      isLoading: state => state.loading
    }
  },
  store: store
}
</script>

<style>

</style>
