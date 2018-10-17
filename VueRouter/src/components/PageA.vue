<template lang="html">
  <div>
    <h1>Page A</h1>
    <p>{{ $route.params.id }}</p>
    <h2>Sous vue</h2>
    <ul>
      <router-link :to="{ name: 'a.b', params: {} }"></router-link>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
}
</script>
