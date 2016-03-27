<template>
  <div class="Business" id="{{data.id}}">
    <img src="{{data.image_url}}" alt="" />
    <h2>{{data.name}}</h2>
    <h5>{{data.rating}}<span>/5</span></h5>
    <p>
      {{data.snippet_text}}
    </p>
    <p>
      {{ data.is_closed ? 'Currently closed.': 'Open for business!'}}
    </p>
    <p>
      
      <small>
        {{address}}
      </small>
    </p>
  </div>
</template>

<script>
export default {
  computed: {
    address: function () {
      return this.data.display_address.join(' ')
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
