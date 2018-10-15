<template>
  <div id="app">
    <carousel>
      <carousel-slide>
        Salut tous le monde
        <img src="http://lorempicsum.com/nemo/627/200/3">
      </carousel-slide>
      <carousel-slide>
        Au revoir tous le monde
        <img src="http://lorempicsum.com/up/627/200/3">
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
};
</script>

<style>
</style>
