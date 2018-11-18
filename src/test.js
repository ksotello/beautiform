import React from 'react'
import { mount } from 'enzyme'

import '../setupTests'

import ExampleComponent from './'

describe('ExampleComponent', () => {
  it('is truthy', () => {
    expect(ExampleComponent).toBeTruthy()
  })

  it('should mount', done => {
    const wrapper = mount(<ExampleComponent />)
    expect(wrapper.exists()).toBe(true)
    wrapper.unmount()
    done()
  })
})
