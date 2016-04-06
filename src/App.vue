<template>
  <div id="app">
    <Search></Search>
    <Business-Collection :data="searchData"></Business-Collection>
    <section class="loading" v-show="isLoading">
      <p>
        loading...
      </p>
    </section>
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

<style scoped>
  .loading:before {
    content: "";
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0,0,0,0.75);
  }
  .loading p {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate3d(-50%, -50%, 0);
    color: #fff;
  }
</style>
