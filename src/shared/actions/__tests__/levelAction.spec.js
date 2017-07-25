import * as actions from '../levelAction'

const snapshot = (action) => expect(action).toMatchSnapshot()

describe('levelAction', () => {
  it('changeLevel', () => {
    snapshot(actions.changeLevel('advanced'))
  })
})
