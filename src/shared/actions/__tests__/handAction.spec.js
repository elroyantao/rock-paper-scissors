import * as actions from '../handAction'

const snapshot = (action) => expect(action).toMatchSnapshot()

describe('handAction', () => {
  it('setPlayerHand', () => {
    snapshot(actions.setPlayerHand(1))
  })
  it('setComputerHand', () => {
    snapshot(actions.setComputerHand(2))
  })
  it('clearHand', () => {
    snapshot(actions.clearHand())
  })
})
