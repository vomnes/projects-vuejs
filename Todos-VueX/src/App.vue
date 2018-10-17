<template>
  <div id="app">
    <todos></todos>
    <todos></todos>
    <todos></todos>
  </div>
</template>

<script>
import todos from './components/Todos';

export default {
  name: 'App',
  components: {
    todos,
  },
};
</script>

<style>
</style>
