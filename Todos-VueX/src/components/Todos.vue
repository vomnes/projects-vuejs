<template>
  <section class="todoapp">
    <header class="header">
      <h1>Todos</h1>
      <input type="text" class="new-todo" placeholder="Ajouter une tache"
      v-model="newTodo" @keyup.enter="addTodo">
    </header>
    <div class="main">
      <input type="checkbox" class="toggle-all" v-model="allDone">
      <label for="toggle-all" @click="allDone">Mark all as complete</label>
      <ul class="todo-list">
        <li class="todo" v-for="todo in filteredTodos" :class="filter === 'done' ? {editing: todo === editing} : {completed: todo.completed, editing: todo === editing}">
          <div class="view">
            <input type="checkbox" v-model="todo.completed" class="toggle">
            <label @dblclick="editTodo(todo)">{{ todo.name }}</label>
            <button class="destroy" @click.prevent="deleteTodo(todo)"></button>
          </div>
          <input type="text" class="edit" v-model="todo.name" @keyup.enter="doneEdit"
          v-focus="todo === editing" @blur="doneEdit" @keyup.esc="cancelEdit">
        </li>
      </ul>
    </div>
    <footer class="footer" v-show="todos.length">
      <span class="todo-count"><strong>{{ remaining }}</strong> tâches à faire</span>
      <ul class="filters">
        <li><a href="#" :class="{selected: filter === 'all'}" @click.prevent="filter = 'all'">Toutes</a></li>
        <li><a href="#" :class="{selected: filter === 'todo'}" @click.prevent="filter = 'todo'">À faire</a></li>
        <li><a href="#" :class="{selected: filter === 'done'}" @click.prevent="filter = 'done'">Faites</a></li>
      </ul>
      <button class="clear-completed" v-show="done" @click.prevent="deleteCompleted">Supprimer les tâches finies</button>
    </footer>
  </section>
</template>

<script>
import Vue from 'vue'
import store from './TodosStore.js'
import Vuex from 'vuex'
global.v = Vuex

export default {
  store,
  data () {
    return {
      newTodo: '',
      filter: 'all',
      editing: null,
      oldTodo: ''
    }
  },
  methods: {
    addTodo () {
      this.todos.push({
        name: this.newTodo,
        completed: false
      })
      this.newTodo = '';
    },
    deleteTodo (todo) {
      this.todos = this.todos.filter(i => i !== todo)
    },
    deleteCompleted () {
      this.todos = this.todos.filter(todo => !todo.completed)
    },
    editTodo (todo) {
      this.editing = todo
      this.oldTodo = todo.name
    },
    doneEdit () {
      this.editing = null
    },
    cancelEdit () {
      this.editing.name = this.oldTodo
      this.doneEdit()
    }
  },
  computed: {
    ...Vuex.mapGetters(['todos']),
    remaining () {
      // return this.todos.filter(todo => !todo.completed).length
    },
    done () {
      // return this.todos.filter(todo => todo.completed).length
    },
    filteredTodos () {
      switch(this.filter) {
        case "todo":
          // return this.todos.filter(todo => !todo.completed);
        case "done":
          // return this.todos.filter(todo => todo.completed);
        default:
          // return this.todos;
      }
    },
    allDone: {
      get () {
        return this.remaining === 0;
      },
      set (value) {
        this.todos.forEach(todo => {
          todo.completed = value
        })
      },
    }
  },
  directives: {
    focus (el, value) {
      if (value) {
        Vue.nextTick(_ => {
          el.focus()
        })
      }
    }
  }
}
</script>

<style src="./todos.css"></style>
