<template>
  <div id="app">
    <Search></Search>
    {{searchData.total}}
    <p v-show="isLoading">
      loading...
    </p>
  </div>
</template>

<script>
import Search from './components/Search'
import store from './vuex/store'

export default {
  components: {
    Search
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
