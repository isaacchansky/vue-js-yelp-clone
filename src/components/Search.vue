<template>
  <div class="Search">
    <h1>What do you need?</h1>
    <form class="">
      <input v-model="term" placeholder="What are you looking for?">
      <br>
      <input v-model="location" placeholder="Where?">
      <button type="button" name="button" @click="search({ term: term, location: location})">submit</button>
    </form>

    {{ combined }}
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
      term: '',
      location: '',
      message: null
    }
  },
  vuex: {
    actions: {
      search: search
    }
  }
}
</script>
