import React from 'react'
import { render } from 'react-dom'

import App from './app'
import { APP_CONTAINER_CLASS } from '../shared/config'

console.log(APP_CONTAINER_CLASS)
render(<App />, document.querySelector(`.${APP_CONTAINER_CLASS}`))
