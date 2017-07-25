import testComponentHelper from '../../../../lib/test-helper'
import Hands from '../Hands'


describe('<Hands /> ', () => {
  const initialState = {
    hands: [0, 2, 4],
    playerHand: null,
    applyHand: jest.fn()
  }
  const renderComponent = testComponentHelper(Hands.WrappedComponent)
  describe('@renders', () => {
    it('in default state', () => {
      expect(renderComponent(initialState).getTree())
        .toMatchSnapshot()
    })
    it('with playerHand set', () => {
      expect(renderComponent({
        ...initialState,
        playerHand: 3
      }).getTree())
        .toMatchSnapshot()
    })
    it('with hands as null', () => {
      expect(renderComponent({
        ...initialState,
        hands: []
      }).getTree())
        .toMatchSnapshot()
    })
  })
  describe('@events', () => {
    it('should call applyHand on click of hand', () => {
      const { wrapper, instance } = renderComponent(initialState)
      wrapper.find('Hand').first().simulate('click')
      expect(instance.props.applyHand).toHaveBeenCalledTimes(1)
    })
  })
})
