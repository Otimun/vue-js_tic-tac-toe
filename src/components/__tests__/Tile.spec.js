import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import Tile from '@/components/Tile.vue'

describe('Tile', () => {
  it('renders a square tile', () => {
    const size = '100px';
    const wrapper = mount(Tile, {
      props: {
        size
      }
    })
    const tileElement = wrapper.find('.tile')
    const computedStyles = window.getComputedStyle(tileElement.element)

    expect(computedStyles.width).toBe(computedStyles.height)
  })
})
