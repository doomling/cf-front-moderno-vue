<script setup>
const model = defineModel({ type: Boolean, default: false });
</script>

<template>
  <div v-if="model">
    <h1>Contenido</h1>
    <button @click="model = false">Cerrar</button>
  </div>
</template>

<style scoped></style>
