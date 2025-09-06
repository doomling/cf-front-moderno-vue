<script setup>
import UserCard from './UserCard.vue'
const user = { name: 'Bel', age: 30 }
function onSelect() {
  console.log('Elegido')
}
</script>

<template>
  <article>
    <h1>Props test</h1>
    <UserCard :name="user.name" :age="user.age" @select="onSelect" />
  </article>
</template>

<style scoped>
article {
  border: 1px solid gold;
}
</style>
