<template>
  <div class="PlaceCollection" v-hide="isEmpty">
    <p>
      filters?
    </p>
    {{data.total}} {{ data.total | pluralize 'result' }}
    <Business v-for="business in data.businesses" :data="business">

    </Business>
    <Map :businesses="data.businesses" :center="[data.region.center.latitude, data.region.center.longitude]"> </Map>

  </div>
  <section class="back-up">
    <button>Back to Map!</button>
  </section>
</template>

<script>
import Business from './Business'
import Map from './Map'

export default {
  components: {
    Business,
    Map
  },
  computed: {
    isEmpty: function () {
      if (this.data.businesses === undefined || this.data.businesses.length === 0) {
        return true
      } else {
        return false
      }
    }
  },
  props: {
    data: {
      type: Object,
      required: true,
      default: {
      }
    }
  },
  data () {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
    }
  }
}
</script>

<style scoped>
  .PlaceCollection {
    margin-top: 45vh;
    z-index: 0;
    max-width: 1000px;
    width: 80%;
    padding-left: 10%;
    padding-right: 10%;
    background: #fff;
  }

  .back-up {
    background: #333;
    width: 100%;
    padding: 5rem 0;
    text-align: center;
  }
  .back-up button {
    border: none;
    color: white;
    background: none;
  }
</style>
