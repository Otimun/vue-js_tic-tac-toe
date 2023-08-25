<script setup>
  import Tile from './Tile.vue'
  const props = defineProps({
    size: Number,
    tiles: Array
  })

</script>

<template>
  <div class="board">
    <!-- Objects on the board -->
    <div :key="tile.id" v-for="tile in tiles">
    <Tile :tile="tile"/>
    </div>
  </div>
</template>