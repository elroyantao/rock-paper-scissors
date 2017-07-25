import testComponentHelper from '../../../../lib/test-helper'
import Hand from '../Hand'


describe('<Hand /> ', () => {
  const initialState = {
    type: 0,
    isProgress: undefined,
    onClick: jest.fn()
  }
  const renderComponent = testComponentHelper(Hand)
  describe('@renders', () => {
    it('in default state when type is 0/rock', () => {
      const { wrapper, getTree } = renderComponent(initialState)
      expect(getTree())
        .toMatchSnapshot()
      expect(wrapper.find('.Hand-image--rock').length).toBe(1)
    })
    it('when type is 1/spock', () => {
      const { wrapper, getTree } = renderComponent({
        ...initialState,
        type: 1
      })
      expect(getTree())
        .toMatchSnapshot()
      expect(wrapper.find('.Hand-image--spock').length).toBe(1)
    })
    it('when type is 1/paper', () => {
      const { wrapper, getTree } = renderComponent({
        ...initialState,
        type: 2
      })
      expect(getTree())
        .toMatchSnapshot()
      expect(wrapper.find('.Hand-image--paper').length).toBe(1)
    })
    it('when type is 1/lizard', () => {
      const { wrapper, getTree } = renderComponent({
        ...initialState,
        type: 3
      })
      expect(getTree())
        .toMatchSnapshot()
      expect(wrapper.find('.Hand-image--lizard').length).toBe(1)
    })
    it('when type is 1/scissors', () => {
      const { wrapper, getTree } = renderComponent({
        ...initialState,
        type: 4
      })
      expect(getTree())
        .toMatchSnapshot()
      expect(wrapper.find('.Hand-image--scissors').length).toBe(1)
    })
    it('when type is a string', () => {
      const { wrapper, getTree } = renderComponent({
        ...initialState,
        type: 'waiting'
      })
      expect(getTree())
        .toMatchSnapshot()
      expect(wrapper.find('.Hand-image--waiting').length).toBe(1)
    })
  })
  describe('@events', () => {
    beforeEach(() => jest.clearAllMocks())
    it('onClick hand should call onClick if type is a number', () => {
      const { wrapper, instance } = renderComponent({
        ...initialState,
        type: 2
      })
      wrapper.find('.Hand-icon').simulate('click')
      expect(instance.props.onClick).toHaveBeenCalledTimes(1)
    })
    it('onClick hand should  not call onClick if type is a string', () => {
      const { wrapper, instance } = renderComponent({
        ...initialState,
        type: 'waiting'
      })
      wrapper.find('.Hand-icon').simulate('click')
      expect(instance.props.onClick).not.toHaveBeenCalled()
    })
  })
})
