import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import Hand from './Hand'
import styles from './Hands.css'


@connect((state) => ({
  hands: state.level.hands,
  playerHand: state.hand.playerHand
}))
export default class Controls extends Component {
  static propTypes = {
    hands: PropTypes.array,
    playerHand: PropTypes.number,
    applyHand: PropTypes.func
  }

  render() {
    const { hands, playerHand, applyHand } = this.props
    if (!hands || !hands.length || playerHand !== null) return null
    return (
      <div className={styles.Hands}>
        <h3>Please play your hand</h3>
        <div className={styles['Hands-list']}>
          {
            hands.map((hand) =>
              <Hand type={hand} key={hand} onClick={applyHand} />
            )
          }
        </div>
      </div>
    )
  }
}
