import createReducer from '../lib/create-reducer'

const initialState = {
  playerHand: null,
  computerHand: null,
  result: ''
}

export default createReducer(initialState, {
  SET_PLAYER_HAND: (state, { playerHand }) => ({ ...state, playerHand }),
  SET_COMPUTER_HAND: (state, { computerHand }) => ({ ...state, computerHand }),
  CLEAR_HANDS: () => initialState,
  PLAYER_WINS: (state) => ({ ...state, result: 'win' }),
  COMPUTER_WINS: (state) => ({ ...state, result: 'loose' }),
  ITS_A_TIE: (state) => ({ ...state, result: 'tie' }),
  CHANGE_LEVEL: () => initialState
})
