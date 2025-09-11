<script setup>
import { ref } from "vue";
import MyModal from "./components/MyModal.vue";
import Counter from "./components/Counter.vue";
import ShowCount from "./components/ShowCount.vue";

const isOpen = ref(false);
</script>

<template>
  <!-- <button @click="isOpen = true">Abrir modal</button>
  <MyModal v-model="isOpen" /> -->
  <Counter />
  <ShowCount />
</template>

<style scoped></style>
