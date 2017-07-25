import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import InProgress from '../../presentation/InProgress/InProgress'
import Hands from '../../presentation/Hands/Hands'
import { applyHand } from '../../../actions/rpslsAction'
import { clearHand } from '../../../actions/handAction'
import styles from './Control.css'

@connect((state) => ({
  result: state.hand.result,
  playerHand: state.hand.playerHand,
  computerHand: state.hand.computerHand
}), { applyHand, clearHand })
export default class Controls extends Component {
  static propTypes = {
    result: PropTypes.string,
    playerHand: PropTypes.number,
    computerHand: PropTypes.number,
    applyHand: PropTypes.func,
    clearHand: PropTypes.func
  }

  renderResult() {
    const { result } = this.props
    if (result === '') return null
    let message
    switch (result) {
      case 'win':
        message = 'You win!!'
        break
      case 'loose':
        message = 'Computer wins!!'
        break
      case 'tie':
        message = 'It\'s a tie!!'
        break
      default:
        message = ''
    }
    return (
      <div className={styles[`Controls-result--${result}`]}>
        {message}
      </div>
    )
  }

  renderPlayAgainButton() {
    const { playerHand, computerHand, clearHand } = this.props
    if (playerHand === null || computerHand === null) return null
    return (
      <div >
        <button className={styles['Controls-playAgain']} onClick={clearHand} >Play Again</button>
      </div>
    )
  }

  render() {
    const { applyHand } = this.props
    return (
      <div className={styles.Controls}>
        <Hands applyHand={applyHand} />
        <InProgress />
        {this.renderResult()}
        {this.renderPlayAgainButton()}
      </div>
    )
  }
}
