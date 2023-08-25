import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import Header from '@/components/Header.vue'

describe('Header', () => {
  it('renders a header', () => {
    const title = 'Test Title'
    const wrapper = mount(Header, {
      props: {
        title
      }
    })
    const headerElement = wrapper.find('h1')
    expect(headerElement.exists()).toBe(true)
  })
  it('displays given title', () => {
    const title = 'Test Title'
    const wrapper = mount(Header, {
      props: {
        title
      }
    })
    const headerElement = wrapper.find('h1')
    console.log(headerElement.text())
    expect(headerElement.text()).toBe(title)
  })
  it('displays in the color specified', () => {
    const color = 'blue'
    const wrapper = mount(Header, {
      props: {
        color
      }
    })
    const headerElement = wrapper.find('h1')
    expect(headerElement.element.style.color).toBe(color)
  })
})