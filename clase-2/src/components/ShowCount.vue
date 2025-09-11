<script setup>
import { useCounterStore } from "@/stores/counter";
const counter = useCounterStore();
</script>

<template>
  <h1>{{ counter.count }}</h1>
</template>
