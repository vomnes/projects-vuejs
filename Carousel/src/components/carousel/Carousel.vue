<template>
  <div class="carousel">
    <slot></slot>
    <button class="carousel__nav carousel__next" @click.prevent="next"></button>
    <button class="carousel__nav carousel__prev" @click.prevent="prev"></button>
    <div class="carousel__pagination">
      <button v-for="n in slidesCount" @click="goto(n-1)" :class="{active: n-1==index}"></button>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      index: 0,
      slides: [],
      direction: null
    }
  },
  mounted () {
    this.slides = this.$children
    this.slides.forEach((slide, i) => {
      slide.index = i
    })
  },
  computed: {
    slidesCount () { return this.slides.length }
  },
  methods: {
    next () {
      this.index++
      this.direction = 'right';
      if (this.index >= this.slidesCount) {
        this.index = 0
      }
    },
    prev () {
      this.index--
      this.direction = 'left';
      if (this.index < 0) {
        this.index = this.slidesCount - 1
      }
    },
    goto (index) {
      this.direction = index > this.index ? 'right' : 'left'
      this.index = index
    }
  }
}

</script>

<style src="./carousel.css"></style>
