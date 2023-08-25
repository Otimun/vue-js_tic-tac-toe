<script setup>
  const props = defineProps({
    size: String
  })
</script>

<template>
  <div class="tile" :style="{ width: size, height: size }">
  </div>
</template>