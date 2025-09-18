<script setup>
import { ref, onMounted } from "vue";

const pokemon = ref(null);

async function fetchPokemon(name) {
  try {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    const data = await res.json();

    console.log(data);

    pokemon.value = {
      name: data.name,
      id: data.id,
      weight: data.weight,
    };
  } catch (e) {
    console.log(e);
  }
}

onMounted(() => fetchPokemon("pikachu"));
</script>

<template>
  <div>
    <h2>Hola Pokemon</h2>
    <span v-if="pokemon"> {{ pokemon.name }} </span>
  </div>
</template>
