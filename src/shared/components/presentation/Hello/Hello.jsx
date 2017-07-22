import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { setName } from '../../../actions/helloAction'

@connect((state) => ({
  name: state.hello
}), { setName })
class Hello extends Component {

  static propTypes = {
    name: PropTypes.string,
    setName: PropTypes.func
  }

  componentDidMount() {
    this.props.setName('Elroysaa')
  }
  render() {
    return <h1>Hello React!! {this.props.name}</h1>
  }
}

export default Hello
