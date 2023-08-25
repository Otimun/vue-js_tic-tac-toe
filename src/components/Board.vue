<script setup>
  import Tile from './Tile.vue'
  const props = defineProps({
    boardSize: Number,
    boardTiles: Array
  })

</script>

<template>
  <div class="board">
    <!-- Objects on the board -->
    <div :key="tile.id" v-for="tile in boardTiles">
    <Tile :tile="tile"/>
    </div>
  </div>
</template>