import React, { Component } from 'react'
import PropTypes from 'prop-types'

class FormContextProvider extends Component {
    static propTypes = {
      formData: PropTypes.object.isRequired,
      children: PropTypes.node
    }

    static childContextTypes = {
      formData: PropTypes.object.isRequired
    }

    getChildContext() {
      const { formData } = this.props
      return { formData }
    }

    render() {
      const { children } = this.props
      return React.Children.only(children)
    }
}

export default FormContextProvider
