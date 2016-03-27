<template>
  <div class="Map">
    <button type="button" @click="refresh()">refresh</button>
    <div id="business-map">

    </div>
  </div>
</template>

<script>
var myLayer
export default {
  props: {
    businesses: {
      type: Array,
      required: true
    },
    center: {
      required: true,
      type: Array,
      length: 2
    }
  },

  methods: {
    refresh: function () {
      var geojson = {
        type: 'FeatureCollection',
        features: this.businesses.map(function (b) {
          return {
            type: 'Feature',
            properties: {
              title: b.name,
              'marker-color': '#f86767',
              'marker-size': 'small'
            },
            geometry: {
              type: 'Point',
              coordinates: [
                b.location.coordinate.longitude,
                b.location.coordinate.latitude
              ]
            }
          }
        })
      }
      myLayer.setGeoJSON(geojson)
    }
  },
  ready () {
    window.L.mapbox.accessToken = 'pk.eyJ1IjoiaWNoYW5za3kiLCJhIjoiVHVfWmxJbyJ9.aEnFoqckTCgX6J3z5eutlQ'
    var map = window.L.mapbox.map('business-map', 'mapbox.light').setView(this.center, 14)
    myLayer = window.L.mapbox.featureLayer().addTo(map)

    myLayer.on('mouseover', function (e) {
      e.layer.openPopup()
    })
    myLayer.on('mouseout', function (e) {
      e.layer.closePopup()
    })

    var geojson = {
      type: 'FeatureCollection',
      features: this.businesses.map(function (b) {
        return {
          type: 'Feature',
          properties: {
            title: b.name,
            'marker-color': '#f86767',
            'marker-size': 'small'
          },
          geometry: {
            type: 'Point',
            coordinates: [
              b.location.coordinate.longitude,
              b.location.coordinate.latitude
            ]
          }
        }
      })
    }
    myLayer.setGeoJSON(geojson)
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


<style>
  #business-map {
    width: 100%;
    height: 500px;
  }
</style>
