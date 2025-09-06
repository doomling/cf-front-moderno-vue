<template>
  <article>
    <h1>Props test</h1>

    <ul class="list">
      <li v-for="(user, idx) in users" :key="user.id">
        <UserCard
          :id="user.id"
          :name="user.name"
          :age="user.age"
          @select="(id) => onSelect(id, idx)"
        />
        <small class="index">#{{ idx }}</small>
      </li>
    </ul>
  </article>
</template>

<script setup>
import { ref } from 'vue'
import UserCard from './UserCard.vue'

const users = ref([
  { id: 101, name: 'Bel', age: 30 },
  { id: 102, name: 'Mati', age: 28 },
  { id: 103, name: 'Ana', age: 35 },
])

function onSelect(id, order) {
  console.log('Elegido id:', id, '| orden:', order) // order es 0-based
}
</script>

<style scoped>
article {
  border: 1px solid gold;
  padding: 1rem;
}
.list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: 0.5rem;
}
li {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}
.index {
  opacity: 0.6;
}
</style>
