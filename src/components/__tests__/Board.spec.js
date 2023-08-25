import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import Board from '@/components/Board.vue'

describe('Board', () => {
  it('has equal number of objects in width and height', () => {
    const boardSize = 2
    const boardTiles = Array.from({ length: boardSize ** 2 }, 
      (_, index) => ({ id: index }))

    const wrapper = mount(Board, {
      props: {
        boardSize,
        boardTiles,
      }
    })

    const objectElements = wrapper.findAll('.tile')
    expect(objectElements.length).toBe(boardSize ** 2)
  })
})