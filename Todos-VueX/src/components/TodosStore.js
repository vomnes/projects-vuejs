import Vuex from 'vuex'

const state = {
   todos: [
     {
       name: 'Notre premiere tache',
       completed: true
     },
   ]
}

const mutations = {
  ADD_TODO: (state, name) => {
    state.todos.push({
      name,
      completed: false
    })
  }
}

const getters = {
  todos: state => state.todos,
  completedTodos: state => state.todos.filter(todo => todo.completed),
  remainingTodos: state => state.todos.filter(todo => !todo.completed)
}

let store = new Vuex.Store({
  state: state,
  mutations: mutations,
  getters: {

  },
  actions: {

  },
  strict: true
})

global.store = store

export default store
