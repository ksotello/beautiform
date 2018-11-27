import React, { Component } from 'react'
import PropTypes from 'prop-types'
import withForm from './withForm'

class Field extends Component {
    static propTypes = {
      formData: PropTypes.object.isRequired
    }

    render() {
      const { formData } = this.props
      return <div>{formData}</div>
    }
}

export default withForm(Field)
