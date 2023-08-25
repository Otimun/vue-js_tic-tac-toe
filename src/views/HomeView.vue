<script setup>
  import Tile from '@/components/Tile.vue'
  import Board from '@/components/Board.vue'
  const boardSize = 3
  const tiles = Array.from({ length: boardSize ** 2 }, 
      (_, index) => ({ id: index }))
</script>

<template>
  <div id="app">
    <Board :boardSize=boardSize :boardTiles=tiles />
  </div>
</template>

