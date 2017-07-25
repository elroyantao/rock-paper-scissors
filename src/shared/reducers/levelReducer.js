import createReducer from '../lib/create-reducer'
import * as levels from '../lib/rpsls-map'

const initialState = {
  name: 'classic',
  hands: levels.classic
}

export default createReducer(initialState, {
  CHANGE_LEVEL: (state, { level }) => ({ name: level, hands: levels[level] })
})
