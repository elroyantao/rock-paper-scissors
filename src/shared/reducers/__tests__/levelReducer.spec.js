import { createStore } from 'redux'
import levelReducer from '../levelReducer'
import * as levels from '../../lib/rpsls-map'


describe('levelReducer', () => {
  it('CHANGE_LEVEL should change the level and hands', () => {
    const store = createStore(levelReducer)
    const level = 'advanced'
    expect(store.getState()).toEqual({
      name: 'classic',
      hands: levels.classic
    })
    store.dispatch({
      type: 'CHANGE_LEVEL',
      level
    })
    expect(store.getState()).toEqual({
      name: level,
      hands: levels[level]
    })
  })
})
