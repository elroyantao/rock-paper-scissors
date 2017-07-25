import { createStore } from 'redux'
import scoreReducer from '../scoreReducer'

describe('scoreReducer', () => {
  it('PLAYER_WINS should increment the player score', () => {
    const store = createStore(scoreReducer)
    expect(store.getState().player).toEqual(0)
    store.dispatch({
      type: 'PLAYER_WINS'
    })
    expect(store.getState().player).toEqual(1)
  })
  it('COMPUTER_WINS should increment the computer score', () => {
    const store = createStore(scoreReducer)
    expect(store.getState().computer).toEqual(0)
    store.dispatch({
      type: 'COMPUTER_WINS'
    })
    expect(store.getState().computer).toEqual(1)
  })
  it('ITS_A_TIE should increment the tie score', () => {
    const store = createStore(scoreReducer)
    expect(store.getState().tie).toEqual(0)
    store.dispatch({
      type: 'ITS_A_TIE'
    })
    expect(store.getState().tie).toEqual(1)
  })
  it('RESET_SCORE should set to initialState', () => {
    const store = createStore(scoreReducer)
    const initialState = store.getState()
    store.dispatch({
      type: 'PLAYER_WINS'
    })
    expect(store.getState()).not.toEqual(initialState)
    store.dispatch({
      type: 'RESET_SCORE'
    })
    expect(store.getState()).toEqual(initialState)
  })
  it('CHANGE_LEVEL should set to initialState', () => {
    const store = createStore(scoreReducer)
    const initialState = store.getState()
    store.dispatch({
      type: 'PLAYER_WINS'
    })
    expect(store.getState()).not.toEqual(initialState)
    store.dispatch({
      type: 'CHANGE_LEVEL',
      level: 'classic'
    })
    expect(store.getState()).toEqual(initialState)
  })
})
