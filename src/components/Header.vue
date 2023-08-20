<script setup>
  const props = defineProps({
    title: String,
    color: String,
  })
</script>
<template>
  <h1 :style="{ color: color }">{{title}}</h1>
</template>

<style scoped>
  h1 {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    color: black;
  }
</style>
