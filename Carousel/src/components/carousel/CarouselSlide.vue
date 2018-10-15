<template>
  <div v-show="visible">
    Index: {{ index }}
    <slot></slot>
  </div>
</template>

<script>

  export default {
    data () {
      return {
        index: 0
      }
    },
    computed: {
      visible () {
        return this.index === this.$parent.index
      }
    }
  }

</script>

<style lang="css">
</style>
