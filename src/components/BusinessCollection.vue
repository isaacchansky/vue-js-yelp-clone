<template>
  <div class="PlaceCollection"  v-show="!isEmpty"  transition="fade">
    <header>
      <input type="text" name="query" placeholder="something in specific?" v-model="query">
      <label for="onlybest">
        <input type="checkbox" id="onlybest" v-model="onlyBest">
        Only show 4.5 &amp; above
      </label>
      <span class="muted">
        {{data.total | numWithComma }} {{ data.total | pluralize 'result' }}
      </span>
    </header>
    <Business v-for="business in data.businesses | filterBy query | filterBy isWellRated(onlyBest)" :data="business">

    </Business>

  </div>
  <Map :businesses="data.businesses" :center="[data.region.center.latitude, data.region.center.longitude]" v-show="!isEmpty" transition="fade"> </Map>
  <section class="back-up" v-show="!isEmpty"  transition="fade">
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
      query: '',
      onlyBest: false,
      isWellRated: function (isWellRated) {
        if (isWellRated) {
          return function (Business) {
            return Business.rating > 4
          }
        } else {
          return function (Business) {
            return true
          }
        }
      }
    }
  }
}
</script>

<style scoped>
  .PlaceCollection {
    margin: 43vh auto 0;
    z-index: 0;
    max-width: 1000px;
    width: 80%;
    padding-left: 10%;
    padding-right: 10%;
    background: #fff;
    min-height: 50vh;
  }
  header {
    padding: 1rem 0;
  }
  header input {
    font-size: 1rem;
    padding: 0.5em;
  }

  .muted {
    color: #ccc;
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

  .fade-transition {
    transition: all 250ms ease-in-out;
    opacity: 1;
  }
  .fade-enter,
  .fade-leave {
    opacity: 0;
  }

</style>
