import React, { Component } from 'react'
import PropTypes from 'prop-types'

const withForm = WrappedComponent => {
  return class extends Component {
    static contextType = {
      formData: PropTypes.object.isRequired
    }

    render () {
      const { formData } = this.context
      return <WrappedComponent formData={formData} />
    }
  }
}

export default withForm
