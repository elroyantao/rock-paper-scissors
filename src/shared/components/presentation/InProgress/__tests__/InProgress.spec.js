import testComponentHelper from '../../../../lib/test-helper'
import InProgress from '../InProgress'


describe('<InProgress /> ', () => {
  const initialState = {
    playerHand: null,
    computerHand: null,
    level: 'classic'
  }
  const renderComponent = testComponentHelper(InProgress.WrappedComponent)
  describe('@renders', () => {
    it('in default state', () => {
      expect(renderComponent(initialState).getTree())
        .toMatchSnapshot()
    })
    it('when playerHand is not null and computerHand is null', () => {
      expect(renderComponent({
        ...initialState,
        playerHand: 3
      }).getTree())
        .toMatchSnapshot()
    })
    it('when playerHand and computerHand is not null', () => {
      expect(renderComponent({
        ...initialState,
        playerHand: 3,
        computerHand: 2
      }).getTree())
        .toMatchSnapshot()
    })
    it('when playerHand and computerHand is not null and level is advanced', () => {
      expect(renderComponent({
        ...initialState,
        playerHand: 3,
        level: 'advanced'
      }).getTree())
        .toMatchSnapshot()
    })
  })
})
