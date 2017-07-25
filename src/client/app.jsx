import React, { Component } from 'react'

import Main from '../shared/components/containers/Main/Main'
import Header from '../shared/components/presentation/Header/Header'

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Main />
      </div>
    )
  }
}
