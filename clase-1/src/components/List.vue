<template>
  <li v-for="t in todos" :key="t.id" :class="{ done: t.done }" @click="t.done = !t.done">
    {{ t.title }}
  </li>
</template>

<script setup>
import { ref } from 'vue'
const todos = ref([
  { id: 1, title: 'Aprender Vue', done: false },
  { id: 2, title: 'Practicar Composition API', done: true },
])
</script>

<style scoped>
.done {
  text-decoration: line-through;
}
</style>
