import createReducer from '../lib/create-reducer'

const initialState = {
  player: 0,
  computer: 0,
  tie: 0
}

export default createReducer(initialState, {
  PLAYER_WINS: (state) => ({ ...state, player: state.player + 1 }),
  COMPUTER_WINS: (state) => ({ ...state, computer: state.computer + 1 }),
  ITS_A_TIE: (state) => ({ ...state, tie: state.tie + 1 }),
  RESET_SCORE: () => initialState,
  CHANGE_LEVEL: () => initialState
})
