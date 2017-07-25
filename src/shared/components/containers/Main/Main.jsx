import React, { Component } from 'react'

import Controls from '../../containers/Controls/Controls'
import Score from '../../presentation/Score/Score'
import styles from './Main.css'

export default class Main extends Component {
  render() {
    return (
      <div className="Main">
        <Score />
        <Controls />
      </div>
    )
  }
}
