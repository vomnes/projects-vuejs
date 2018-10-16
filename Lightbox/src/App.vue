<template>
  <div id="app">
    <div v-if="title == 'Finding Nemo'">
      <a :href="'https://lorempicsum.com/nemo/800/600/' + n" v-lightbox v-for="(n, index) in 9" :key="index">
        <img :src="'https://lorempicsum.com/nemo/150/150/' + n">
      </a>
    </div>
    <section>
      <div v-if="title == 'Rio'">
        <a :href="'https://lorempicsum.com/rio/800/600/' + n" v-lightbox v-for="(n, index) in 9" :key="index">
          <img :src="'https://lorempicsum.com/rio/150/150/' + n">
        </a>
      </div>
    </section>
    <button @click="title = 'Rio'">View Rio's pictures</button>
    <button @click="title = 'Finding Nemo'">View Finding Nemo's pictures</button>
    <lightbox></lightbox>
  </div>
</template>

<script>
import Lightbox from './components/lightbox/Lightbox.vue'

export default {
  name: 'App',
  components: {
    Lightbox
  },
  data () {
    return {
      title: 'Finding Nemo'
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
