import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import Header from '../Header.vue'

describe('Header', () => {
  it('displays h1 with given title', () => {
    const wrapper = mount(Header, { props: { title: 'Test Title' } })
    expect(wrapper.html()).toContain('>Test Title</h1>')
  })
  it('displays in the color specified', () => {
    const wrapper = mount(Header, { props: { color: 'blue' } })
    expect(wrapper.findComponent('h1').attributes('style')).toContain('blue')
  })
})