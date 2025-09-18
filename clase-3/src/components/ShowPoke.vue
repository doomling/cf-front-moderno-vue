<script setup>
defineProps({
  pokemon: {
    type: Object,
    required: true,
  },
  isLoading: {
    type: Boolean,
    default: false,
  },
  inTeam: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <section class="card">
    <div v-if="isLoading">Cargando...</div>
    <div v-else>
      <h2>{{ pokemon.name }}</h2>
      <img :src="pokemon.image" :alt="pokemon.name" />
      <p><strong>Altura:</strong> {{ pokemon.height }}</p>
      <p><strong>Peso:</strong> {{ pokemon.weight }}</p>
    </div>
  </section>
</template>

<style scoped>
.card {
  margin: 20px auto;
  padding: 15px;
  width: 300px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background: #fafafa;
  text-align: center;
}

.card img {
  width: 120px;
  height: auto;
  background-color: #faffaf;
}

.add-button {
  padding: 10px;
  border: 0;
  background-color: var(--color-primary);
  border-radius: 20px;
  margin: 0 10px;
}

.remove-button {
  padding: 10px;
  border: 0;
  background-color: firebrick;
  border-radius: 20px;
  color: white;
}
</style>
