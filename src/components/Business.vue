<template>
  <div class="Business" id="{{data.id}}">
    <h2>{{data.name}}</h2>
    <p>
      {{data.snippet_text}}
    </p>
    <p>
      {{ data.is_closed ? 'Currently closed.': 'Open for business!'}}
    </p>
    <p>
      {{data.location}}
      On {{data.location.cross_streets}} in {{data.location.neighborhoods}}
      <br>
      More specifically...
      <small>
        {{data.location.address}}
      </small>
    </p>
  </div>
</template>

<script>
export default {
  computed: {
    address: function () {
      return `${this.data.location.address[0]} ${this.data.location.city} ${this.data.location.state_code} ${this.data.location.postal_code}`
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
