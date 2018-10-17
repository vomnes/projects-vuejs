<template lang="html">
  <div>
    <h1>Page A</h1>
    <p>{{ $route.params.id }}</p>
    <h2>Sous vue</h2>
    <ul>
      <router-link :to="{ name: 'a.b' }">Voir la vue B</router-link>
      <router-link :to="{ name: 'a.c' }">Voir la vue C</router-link>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  beforeRouteEnter (route, redirect, next) {
    let confirm = window.confirm(`Do you really want go on 'Page A' ?`)
    if (confirm) {
      next()
    } else {
      window.location = '/'
    }
  }
}

// Use page data
// next(vm => {
//   vm.msg = 'La route est chargee'
// })

</script>
