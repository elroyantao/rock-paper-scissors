import * as actions from '../scoreAction'

const snapshot = (action) => expect(action).toMatchSnapshot()

describe('scoreAction', () => {
  it('playerWins', () => {
    snapshot(actions.playerWins())
  })
  it('computerWins', () => {
    snapshot(actions.computerWins())
  })
  it('itsATie', () => {
    snapshot(actions.itsATie())
  })
  it('resetScore', () => {
    snapshot(actions.resetScore())
  })
})
