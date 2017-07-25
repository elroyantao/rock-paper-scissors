import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import Hand from '../Hands/Hand'
import styles from './InProgress.css'

@connect((state) => ({
  playerHand: state.hand.playerHand,
  computerHand: state.hand.computerHand,
  level: state.level.name
}))
export default class InProgress extends Component {
  static propTypes = {
    playerHand: PropTypes.number,
    computerHand: PropTypes.number,
    level: PropTypes.string
  }

  render() {
    const { playerHand, computerHand, level } = this.props
    if (playerHand === null) return null
    const computerType = computerHand === null ? `${level}Waiting` : computerHand

    return (
      <div className={styles.InProgress}>
        <div className={styles['InProgress-player']}>
          <h3 className={styles['InProgress-label']}>You choose</h3>
          <Hand type={playerHand} isProgress />
        </div>
        <div className={styles['InProgress-player']}>
          <h3 className={styles['InProgress-label']}>computer choose</h3>
          <Hand type={computerType} isProgress />
        </div>
      </div>
    )
  }
}
