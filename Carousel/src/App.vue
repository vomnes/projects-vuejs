<template>
  <div id="app">
    <carousel>
      <carousel-slide v-for="n in slides">
        <div style="position: absolute; left: 0; right: 0; text-align: center;
        top: 50%; color: #FFF; font-size: 16px;">
        Slide {{ n }}
        </div>
        <img :src="'http://lorempicsum.com/nemo/627/200/' + n" width="100%">
      </carousel-slide>
    </carousel>
  </div>
</template>

<script>
import Carousel from './components/carousel/Carousel';
import CarouselSlide from './components/carousel/CarouselSlide';

export default {
  name: 'App',
  components: {
    Carousel,
    CarouselSlide
  },
  data () {
    return {
      slides: 5,
    }
  }
};
</script>

<style>
</style>
