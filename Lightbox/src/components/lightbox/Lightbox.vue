<template>
  <div class="lightbox" v-if="image" @click="close">
    <lightbox-image :image="image"></lightbox-image>
    <div class="lightbox__close" @click="close"></div>
  </div>
</template>

<script>
import './LightboxDirective'
import LightboxImage from './LightboxImage'

import store from './LightboxStore'

export default {
  components: {
    LightboxImage
  },
  data () {
    return {
      state: store.state
    }
  },
  computed: {
    image () {
      if (this.state.index !== false) {
        return this.state.images[this.state.index]
      }
    }
  },
  methods: {
    close () {
      store.close()
    }
  }
}
</script>

<style src="./lightbox.scss" lang="scss"></style>
