<template>
  <button @click="inc">Clicks: {{ n }}</button>
</template>

<script setup>
import { ref } from 'vue'
const n = ref(0)
const inc = () => {
  n.value++
}
</script>

<style scoped>
button {
  background-color: purple;
}
</style>
