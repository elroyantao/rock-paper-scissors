import testComponentHelper from '../../../../lib/test-helper'
import Controls from '../Controls'


describe('<Controls /> ', () => {
  const initialState = {
    result: '',
    playerHand: null,
    computerHand: null,
    applyHand: jest.fn(),
    clearHand: jest.fn()
  }
  const renderComponent = testComponentHelper(Controls.WrappedComponent)
  describe('@renders', () => {
    it('in default state', () => {
      expect(renderComponent(initialState).getTree())
        .toMatchSnapshot()
    })
    it('when result is win', () => {
      expect(renderComponent({
        ...initialState,
        result: 'win'
      }).getTree())
        .toMatchSnapshot()
    })
    it('when result is loose', () => {
      expect(renderComponent({
        ...initialState,
        result: 'loose'
      }).getTree())
        .toMatchSnapshot()
    })
    it('when result is tie', () => {
      expect(renderComponent({
        ...initialState,
        result: 'tie'
      }).getTree())
        .toMatchSnapshot()
    })
    it('when playerHand and computerHand is not null it should show the play again button', () => {
      expect(renderComponent({
        ...initialState,
        playerHand: 3,
        computerHand: 2
      }).getTree())
        .toMatchSnapshot()
    })
  })
  describe('@events', () => {
    it('should call clearHand on click of play again', () => {
      const { wrapper, instance } = renderComponent({
        ...initialState,
        playerHand: 3,
        computerHand: 2
      })
      expect(instance.props.clearHand).not.toHaveBeenCalled()
      wrapper.find('.Controls-playAgain').simulate('click')
      expect(instance.props.clearHand).toHaveBeenCalledTimes(1)
    })
  })
})
