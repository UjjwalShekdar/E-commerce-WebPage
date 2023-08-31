// App.vue
<template>
  <div>
    <h1>Todos</h1>
    <ul>
      <li v-for="todo in todos" :key="todo.id">
        {{ todo.title }}
      </li>
    </ul>
    <p>Completed Todos: {{ completedTodoCount }}</p>
    <p>Total Todos: {{ totalTodoCount }}</p>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex';

export default {
  computed: {
    ...mapState(['todos']),
    ...mapGetters(['completedTodos', 'todoCount']),
    completedTodoCount() {
      return this.completedTodos.length;
    },
    totalTodoCount() {
      return this.todoCount;
    },
  },
  created() {
    this.fetchTodos();
  },
  methods: {
    ...mapActions(['fetchTodos']),
  },
};
</script>