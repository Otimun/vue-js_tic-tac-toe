<script setup>
  const props = defineProps({
    size: {
      type: String,
      default: '50px',
    },
    tile: Object,
  })
</script>

<template>
  <div class="tile" :style="{ width: size, height: size }">
  </div>
</template>

<style scoped>
  .tile {
    border: 1px solid steelblue;
  }
</style>