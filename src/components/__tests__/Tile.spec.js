import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import Tile from '@/components/Tile.vue'

describe('Tile', () => {
  it('renders a square tile', () => {
    const tileSize = '100px';
    const wrapper = mount(Tile, {
      props: {
        tileSize
      }
    })
    const tileElement = wrapper.find('.tile')
    const computedStyles = window.getComputedStyle(tileElement.element)

    expect(computedStyles.width).toBe(computedStyles.height)
  })
  it('renders a square tile with no size specified', () => {
    const wrapper = mount(Tile)
    const tileElement = wrapper.find('.tile')
    const computedStyles = window.getComputedStyle(tileElement.element)
    
    expect(computedStyles.width).toBe('50px')
    expect(computedStyles.height).toBe('50px')
  })
})
