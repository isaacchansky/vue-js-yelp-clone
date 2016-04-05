import Vue from 'vue'

Vue.filter('phone', function (value) {
  return value ? value.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3') : ''
})
