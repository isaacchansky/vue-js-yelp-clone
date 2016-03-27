import Vue from 'vue'
import App from './App'
import About from './About'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
var router = new VueRouter()

router.map({
  '/search': {
    name: 'search',
    component: App
  },
  '/about': {
    component: About
  }
})

/* eslint-disable no-new */
var Base = Vue.extend({})
router.start(Base, 'body')
// Go to search & persist potential parameters
router.go({
  name: 'search',
  query: {
    term: router.query.term,
    location: router.query.location
  }
})
