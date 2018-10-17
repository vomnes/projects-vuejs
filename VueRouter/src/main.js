// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [{
    path: '/',
    component: require('./components/HelloWorld.vue').default,
    name: 'root'
  }, {
    path: '/a',
    // Charged only when needed
    component: resolve => require(['./components/PageA.vue'], resolve).default,
    name: 'a',
    children: [{
      path: 'b',
      component: require('./components/PageB.vue').default,
      name: 'a.b'
    }, {
      path: 'c',
      component: require('./components/PageC.vue').default,
      name: 'a.c'
    }]
  }, {
    path: '/article/:id(\\d+)',
    component: require('./components/PageA.vue').default,
    name: 'post'
  }, {
    path: '*',
    redirect: '/'
  }]
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  render: h => h(App)
})
