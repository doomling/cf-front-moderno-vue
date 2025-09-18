<script setup>
import { usePokemonSearch } from "@/composables/usePokemonSearch";
import ShowPoke from "./ShowPoke.vue";
const { query, onSearch, pokemon, loading, error } = usePokemonSearch();
</script>

<template>
  <nav>
    <form @submit.prevent="onSearch">
      <input v-model="query" placeholder="Ej: Ditto" />
      <button type="submit">Buscando</button>
    </form>
  </nav>

  <ShowPoke v-if="pokemon" :pokemon="pokemon" :is-loading="loading" />
</template>
