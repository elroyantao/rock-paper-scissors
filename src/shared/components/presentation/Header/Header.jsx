import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { changeLevel } from '../../../actions/levelAction'
import styles from './Header.css'

@connect((state) => ({
  level: state.level.name
}), { changeLevel })
export default class Header extends Component {
  static propTypes = {
    level: PropTypes.string,
    changeLevel: PropTypes.func
  }

  onChangeLevel(levelTo) {
    const { level, changeLevel } = this.props
    if (level === levelTo) return
    changeLevel(levelTo)
  }

  render() {
    const { level } = this.props
    return (
      <div className={styles.Header}>
        <div className={styles['Header-tabs']}>
          <div
            className={styles[`Header-tab${level === 'classic' ? '--active' : ''}`]}
            onClick={() => this.onChangeLevel('classic')}
          >
            Classic
          </div>
          <div
            className={styles[`Header-tab${level === 'advanced' ? '--active' : ''}`]}
            onClick={() => this.onChangeLevel('advanced')}
          >
            Advanced
          </div>
        </div>
      </div>
    )
  }
}
