
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import styles from './Score.css'

@connect((state) => ({
  playerScore: state.score.player,
  computerScore: state.score.computer
}), {})
export default class Score extends Component {

  static propTypes = {
    playerScore: PropTypes.number,
    computerScore: PropTypes.number
  }

  render() {
    const { playerScore, computerScore } = this.props
    return (
      <section className={styles.Score}>
        <div className={styles['Score-display']}>
          <div className={styles['Score-label']}>
            Player
          </div>
          <div className={styles['Score-current']}>
            {playerScore}
          </div>
        </div>
        <div className={styles['Score-display']}>
          <div className={styles['Score-label']}>
            Computer
          </div>
          <div className={styles['Score-current']}>
            {computerScore}
          </div>
        </div>
      </section>
    )
  }
}
