<template>
  <div id="app">
    <div class="ui active dimmer" v-if="loading">
      <div class="ui loader"></div>
    </div>
    <div class="ui four column grid">
      <div class="column" v-for="(user, index) in users" :key="index">
        <div class="ui card">
          <div class="content">
            <div class="header">
              <input type="text" v-model="user.name" style="width:100%">
            </div>
            <div class="meta">
              <a>Friends</a>
            </div>
            <div class="description">
              {{ user.address.street }}<br>
              {{ user.address.zipcode }} {{ user.addresscity }}<br>
            </div>
          </div>
          <div class="extra content">
            <div class="ui two buttons">
              <button class="ui basic green button" @click="save(user)">Modifier</button>
              <button class="ui basic red button" @click="destroy(user)">Supprimer</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld'

export default {
  name: 'App',
  components: {
  },
  data () {
    return {
      users: [],
      loading: false
    }
  },
  mounted () {
    this.$user = this.$resource('users{/id}', {}, {}, {
      before: () => {
        this.loading = true
      },
      after: () => {
        this.loading = false
      }
    })
    this.$user.query().then((response) => {
      response.json().then((data) => {
        this.users = data
      })
    }, (response) => {
      console.log('error', response)
    })
  },
  methods: {
    save (user) {
      this.loading = true
      this.$user.update({ id: user.id }, { name: user.name }).then((response) => {
      }, (response) => {
        console.log('error', response)
      }).then(_ => {
        this.loading = false
      })
    },
    destroy (user) {
      this.loading = true
      this.$user.delete({ id: user.id }).then((response) => {
        this.users = this.users.filter(u => u !== user)
      }, (response) => {
        console.log('error', response)
      }).then(_ => {
        this.loading = false
      })
    }
  }
}
</script>

<style>

</style>
