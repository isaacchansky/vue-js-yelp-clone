<template>
  <div class="Search">
    <form class="">
      <label for="term">I'm looking for </label>
      <input v-model="term" name="term" placeholder="coffee, booze, etc">
      <label for="location"> in </label>
      <input v-model="location" name="location" placeholder="Boston, Los Angeles, etc">
      <button type="button" name="button" @click="search({ term: term, location: location})">submit</button>
    </form>

  </div>
</template>

<script>
import { search } from '../vuex/actions'

export default {
  data () {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      term: this.$route.query.term,
      location: this.$route.query.location,
      message: null
    }
  },
  vuex: {
    actions: {
      search: function (store, params) {
        this.$router.go({
          name: 'search',
          query: {
            term: params.term,
            location: params.location
          }
        })
        search(store, params)
      }
    }
  }
}
</script>


<style scoped>
  .Search {
    background: #333;
    color: #fefefe;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;
  }

  form {
    width: 100%;
    max-width: 960px;
    margin: 0 auto;
    display: block;
    padding: 1em;
    font-size: 1.5rem;
  }
  form > * {
    vertical-align: middle;
  }
  input {
    display: inline-block;
    font-size: 1.2rem;
    background: rgba(255,255,255,0.05);
    border: none;
    border-bottom: 2px solid rgba(255, 255, 255, 0.3);
    padding: 0.25em;
    transition: all 250ms ease-in-out;
    color: white;
  }
  input:focus {
    border-bottom-color:rgba(255, 255, 255, 0.8);
    outline: none;

  }
  button {
      font-size: 1.2rem;
      border-radius: 0;
      background: #1798A0;
      color: #fff;
      border: none;
      padding: 0.5em 1em;
      margin: 0 0.5em;
      cursor: pointer;
      transition: all 250ms ease-in-out;
  }
  button:focus, button:hover {
    outline: none;
    background: #147B82;
  }
</style>
