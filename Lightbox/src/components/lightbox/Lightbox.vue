<template>
  <div>
    {{ url }}
  </div>
</template>

<script>
import './LightboxDirective'
import store from './LightboxStore'

export default {
  data () {
    return {
      state: store.state
    }
  },
  computed: {
    url () { return this.state.image }
  }
}
</script>
