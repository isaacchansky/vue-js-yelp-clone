import Vue from 'vue'

Vue.filter('phone', function (value) {
  return value ? value.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3') : ''
})

Vue.filter('numWithComma', function (value) {
  return value ? value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') : ''
})
