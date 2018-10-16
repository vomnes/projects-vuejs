import Vue from 'vue'
import store from './LightboxStore'

Vue.directive('lightbox', {
  bind (el, binding) {
    console.log('bind')
    store.addImage(el.getAttribute('href'))
    el.addEventListener('click', (e) => {
      e.preventDefault()
      store.open(el.getAttribute('href'))
      // Open picture open(el.getAttribute('href'))
    })
  },
  unbind (el) {
    console.log('unbind')
    store.remove(el.getAttribute('href'))
  }
})
