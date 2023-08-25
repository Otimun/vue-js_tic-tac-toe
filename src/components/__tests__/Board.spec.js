import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import Board from '@/components/Board.vue'

describe('Board', () => {
  it('has equal number of objects in width and height', () => {
    const size = 2
    const tiles = Array.from({ length: size * size }, 
      (_, index) => ({ id: index }))

    const wrapper = mount(Board, {
      props: {
        size,
        tiles,
      }
    })

    const objectElements = wrapper.findAll('.tile')
    expect(objectElements.length).toBe(size * size)
  })
})