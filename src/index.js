import React, { Component } from 'react'
import PropTypes from 'prop-types'
import FormDataProvider from './FormDataProvider'

export default class Form extends Component {
  static propTypes = {
    children: PropTypes.oneOfType([PropTypes.node, PropTypes.array])
  }

  state = {
    formData: {}
  }

  render() {
    const { children } = this.props
    const { formData } = this.state

    return (
      <FormDataProvider formData={formData}>
        {children}
      </FormDataProvider>
    )
  }
}
