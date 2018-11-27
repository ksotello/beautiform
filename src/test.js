import React from 'react'
import { mount } from 'enzyme'

import '../setupTests'

import Form from './'

describe('<Form />', () => {
  it('is truthy', () => {
    expect(Form).toBeTruthy()
  })

  it('should mount', done => {
    const wrapper = mount(<Form><div /></Form>)
    expect(wrapper.exists()).toBe(true)
    wrapper.unmount()
    done()
  })
})
