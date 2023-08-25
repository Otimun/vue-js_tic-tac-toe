<script setup>
  import Tile from './Tile.vue'
  const props = defineProps({
    boardSize: {
      type: Number,
      required: true,
    },
    boardTiles: {
      type: Array,
      required: true,
    }
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