<script setup>
import { useCounterStore } from "@/stores/counter";
const counter = useCounterStore();
</script>

<template>
  <p>Count: {{ counter.count }} Computed: {{ counter.doubleCount }}</p>
  <button @click="counter.increment()">+1</button>
</template>
