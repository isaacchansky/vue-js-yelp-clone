<template>
  <div class="Map">
    <div id="business-map"></div>
  </div>
</template>

<script>
var businessMapLayer, map

export default {
  props: {
    businesses: {
      type: Array,
      required: true,
      default: () => []
    },
    center: {
      required: true,
      type: Array,
      length: 2,
      default: () => [0, 0]
    }
  },

  watch: {
    businesses: function () {
      var geojson = {
        type: 'FeatureCollection',
        features: this.businesses.map(function (b) {
          return {
            type: 'Feature',
            properties: {
              title: b.name,
              'marker-color': '#466C3D',
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
      businessMapLayer.setGeoJSON(geojson)
      map.invalidateSize()
      map.fitBounds(businessMapLayer.getBounds())
      map.dragging.disable()
      map.touchZoom.disable()
      map.doubleClickZoom.disable()
      map.scrollWheelZoom.disable()
      map.keyboard.disable()
    }
  },

  ready () {
    window.L.mapbox.accessToken = 'pk.eyJ1IjoiaWNoYW5za3kiLCJhIjoiVHVfWmxJbyJ9.aEnFoqckTCgX6J3z5eutlQ'
    map = window.L.mapbox.map('business-map', 'mapbox.light').setView(this.center, 14)
    businessMapLayer = window.L.mapbox.featureLayer().addTo(map)

    businessMapLayer.on('mouseover', function (e) {
      e.layer.openPopup()
    })
    businessMapLayer.on('mouseout', function (e) {
      e.layer.closePopup()
    })

    var geojson = {
      type: 'FeatureCollection',
      features: this.businesses.map(function (b) {
        return {
          type: 'Feature',
          properties: {
            title: b.name,
            'marker-color': '#466C3D',
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
    businessMapLayer.setGeoJSON(geojson)
    map.dragging.disable()
    map.touchZoom.disable()
    map.doubleClickZoom.disable()
    map.scrollWheelZoom.disable()
    map.keyboard.disable()
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
  .Map {
    position: fixed;
    top: 5.5rem;
    left: 0;
    right: 0;
    z-index: -1;
  }
  #business-map {
    width: 100%;
    height: 33vh;
  }
</style>
