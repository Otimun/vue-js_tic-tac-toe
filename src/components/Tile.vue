<script setup>
  const props = defineProps({
    tileSize: {
      type: String,
      default: '50px',
    },
    tile: Object,
  })
</script>

<template>
  <div class="tile" :style="{ width: tileSize, height: tileSize }">
  </div>
</template>

<style scoped>
  .tile {
    border: 1px solid steelblue;
  }
</style>