import { createStore } from 'redux'
import handReducer from '../handReducer'

describe('handReducer', () => {
  it('SET_PLAYER_HAND should set the playerHand', () => {
    const store = createStore(handReducer)
    const playerHand = 2
    expect(store.getState().playerHand).toEqual(null)
    store.dispatch({
      type: 'SET_PLAYER_HAND',
      playerHand
    })
    expect(store.getState().playerHand).toEqual(playerHand)
  })
  it('SET_COMPUTER_HAND should set the computerHand', () => {
    const store = createStore(handReducer)
    const computerHand = 4
    expect(store.getState().computerHand).toEqual(null)
    store.dispatch({
      type: 'SET_COMPUTER_HAND',
      computerHand
    })
    expect(store.getState().computerHand).toEqual(computerHand)
  })
  it('CLEAR_HANDS should set to initialState', () => {
    const store = createStore(handReducer)
    const computerHand = 4
    const initialState = store.getState()
    store.dispatch({
      type: 'SET_COMPUTER_HAND',
      computerHand
    })
    expect(store.getState()).not.toEqual(initialState)
    store.dispatch({
      type: 'CLEAR_HANDS'
    })
    expect(store.getState()).toEqual(initialState)
  })
  it('PLAYER_WINS should set the result to win', () => {
    const store = createStore(handReducer)
    expect(store.getState().result).toEqual('')
    store.dispatch({
      type: 'PLAYER_WINS'
    })
    expect(store.getState().result).toEqual('win')
  })
  it('COMPUTER_WINS should set the result to loose', () => {
    const store = createStore(handReducer)
    expect(store.getState().result).toEqual('')
    store.dispatch({
      type: 'COMPUTER_WINS'
    })
    expect(store.getState().result).toEqual('loose')
  })
  it('ITS_A_TIE should set the result to tie', () => {
    const store = createStore(handReducer)
    expect(store.getState().result).toEqual('')
    store.dispatch({
      type: 'ITS_A_TIE'
    })
    expect(store.getState().result).toEqual('tie')
  })
  it('CHANGE_LEVEL should set to initialState', () => {
    const store = createStore(handReducer)
    const computerHand = 4
    const initialState = store.getState()
    store.dispatch({
      type: 'SET_COMPUTER_HAND',
      computerHand
    })
    expect(store.getState()).not.toEqual(initialState)
    store.dispatch({
      type: 'CHANGE_LEVEL'
    })
    expect(store.getState()).toEqual(initialState)
  })
})
