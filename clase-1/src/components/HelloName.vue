<template>
  <section class="wrap">
    <label class="row">
      <span>Tu nombre:</span>
      <input v-model.trim="nombre" placeholder="Escribí tu nombre…" />
      <button v-if="nombre" @click="limpiar">Limpiar</button>
    </label>

    <p v-if="nombre" class="hint">¡Bienvenid@, {{ nombre }}!</p>
    <h1>{{ saludo }}</h1>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'

const nombre = ref('')

const saludo = computed(() => {
  if (!nombre.value) return 'Hola Vue 3'
  const hora = new Date().getHours()
  const prefijo = hora < 12 ? 'Buen día' : hora < 19 ? 'Buenas tardes' : 'Buenas noches'
  return `${prefijo}, ${nombre.value}`
})

function limpiar() {
  nombre.value = ''
}
</script>

<style scoped>
.wrap {
  font-family: system-ui;
  max-width: 600px;
  margin: 2rem auto;
  padding: 1rem;
}
.row {
  display: grid;
  grid-template-columns: 110px 1fr auto;
  gap: 0.5rem;
  align-items: center;
}
input {
  padding: 0.5rem 0.75rem;
  border: 1px solid #d1d5db;
  border-radius: 0.5rem;
}
button {
  padding: 0.5rem 0.75rem;
  border: 1px solid #d1d5db;
  border-radius: 0.5rem;
  cursor: pointer;
}
.hint {
  color: #6b7280;
  margin-top: 0.5rem;
}
</style>
