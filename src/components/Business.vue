<template>
  <div class="Business" id="{{data.id}}" transition="fade">
    <header>
      <img :src="data.image_url" alt="" />
      <div class="header-content">
        <h2>{{data.name}}</h2>
        <small>
          {{ data.phone | phone }}
          {{address}}
        </small>
        <h5>rating: {{data.rating}}<span>/5</span> ({{data.review_count}} {{ data.review_count | pluralize 'review' }}) | {{ data.is_closed ? 'Closed': 'Open'}}</h5>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  computed: {
    address: function () {
      return this.data.location.display_address.join(' ')
    }
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


<style scoped>
  .Business {
    box-shadow: 0 0 6px 0px rgba(0,0,0,0.2);
    margin-bottom: 2em;
  }
  header > * {
    display: inline-block;
    vertical-align: middle;
  }
  .header-content {
    padding: 0.5em;
  }
  .header-content h2,
  .header-content h5 {
    margin-top: 0.25em;
    margin-bottom: 0.25em;
  }
  section {
    padding: 0.5em;
  }
  .fade-transition {
    transition: all 250ms ease-in-out;
    opacity: 1;
    top: 0;
    position: relative;
  }
  .fade-enter,
  .fade-leave {
    top: 2em;
    opacity: 0;
  }
</style>
