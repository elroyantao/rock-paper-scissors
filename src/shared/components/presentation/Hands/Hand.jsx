import React, { Component } from 'react'
import PropTypes from 'prop-types'

import styles from './Hand.css'

export default class Hand extends Component {
  static propTypes = {
    type: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string
    ]),
    isProgress: PropTypes.bool,
    onClick: PropTypes.func
  }

  static defaultProps = {
    onClick: () => {}
  }

  getButtonName(type) {
    let name
    switch (type) {
      case 0:
        name = 'rock'
        break
      case 1:
        name = 'spock'
        break
      case 2:
        name = 'paper'
        break
      case 3:
        name = 'lizard'
        break
      case 4:
        name = 'scissors'
        break
      default:
        name = type
    }
    return (
      <div className={styles[`Hand-image--${name}`]} />
    )
  }

  applyHand = () => {
    const { onClick, type } = this.props
    if (typeof type === 'string') return
    onClick(type)
  }

  render() {
    const { type, isProgress } = this.props
    return (
      <div className={styles[`Hand${isProgress ? '--progress' : ''}`]}>
        <div className={styles[`Hand-icon${isProgress ? '--progress' : ''}`]} onClick={this.applyHand}>
          {this.getButtonName(type)}
        </div>
      </div>
    )
  }
}
