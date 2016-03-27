<template>
  <div class="PlaceCollection">
    <p>
      filters?
    </p>
    {{data.total}} {{ data.total | pluralize 'result' }}
    <Business v-for="business in data.businesses" :data="business">

    </Business>
    <Map :businesses="data.businesses" :center="[data.region.center.latitude, data.region.center.longitude]"> </Map>
  </div>
</template>

<script>
import Business from './Business'
import Map from './Map'

export default {
  components: {
    Business,
    Map
  },
  props: {
    data: {
      type: Object,
      required: true
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
