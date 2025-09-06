<template>
  <article @click="emit('select', props.id)">
    <h3>{{ props.name }}</h3>
    <p>Edad: {{ props.age }}</p>
  </article>
</template>

<script setup>
const emit = defineEmits(['select'])

const props = defineProps({
  id: { type: Number, required: true },
  name: { type: String, required: true },
  age: { type: Number, default: 18 },
})
</script>
