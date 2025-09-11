<script setup>
import { defineProps } from "vue";

defineProps({
  msg: { type: String, required: true },
  url: { type: String },
});

function printLog() {
  console.log("hola mundo");
}
</script>

<template>
  <a :href="url" @mouseover="printLog"> {{ msg }}</a>
</template>

<style scoped></style>
