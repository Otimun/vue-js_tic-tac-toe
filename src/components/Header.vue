<script setup>
  const props = defineProps({
    headerTitle: String,
    headerColor: String,
  })
</script>
<template>
  <h1 :style="{ color: headerColor }">{{headerTitle}}</h1>
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
