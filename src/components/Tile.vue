<script setup>
  const props = defineProps({
    size: {
      type: String,
      default: '50px',
    }
  })
</script>

<template>
  <div class="tile" :style="{ width: size, height: size }">
  </div>
</template>