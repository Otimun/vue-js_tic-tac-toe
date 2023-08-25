import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import Header from '@/components/Header.vue'

describe('Header', () => {
  it('renders a header', () => {
    const headerTitle = 'Test Title'
    const wrapper = mount(Header, {
      props: {
        headerTitle
      }
    })
    const headerElement = wrapper.find('h1')
    expect(headerElement.exists()).toBe(true)
  })
  it('displays given title', () => {
    const headerTitle = 'Test Title'
    const wrapper = mount(Header, {
      props: {
        headerTitle
      }
    })
    const headerElement = wrapper.find('h1')
    console.log(headerElement.text())
    expect(headerElement.text()).toBe(headerTitle)
  })
  it('displays in the color specified', () => {
    const headerColor = 'blue'
    const wrapper = mount(Header, {
      props: {
        headerColor
      }
    })
    const headerElement = wrapper.find('h1')
    expect(headerElement.element.style.color).toBe(headerColor)
  })
})