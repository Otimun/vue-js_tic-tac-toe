<script setup>
  import Tile from '@/components/Tile.vue'
  import Board from '@/components/Board.vue'
  const board_size = 3
  const tiles = Array.from({ length: board_size * board_size }, 
      (_, index) => ({ id: index }))
</script>

<template>
  <div id="app">
    <Board :size=board_size :tiles=tiles />
  </div>
</template>

