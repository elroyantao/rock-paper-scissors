import testComponentHelper from '../../../../lib/test-helper'
import Header from '../Header'


describe('<Header /> ', () => {
  const initialState = {
    level: 'classic',
    changeLevel: jest.fn()
  }
  const renderComponent = testComponentHelper(Header.WrappedComponent)
  describe('@renders', () => {
    it('in default state', () => {
      expect(renderComponent(initialState).getTree())
        .toMatchSnapshot()
    })
    it('in advanced state', () => {
      expect(renderComponent({
        ...initialState,
        level: 'advanced'
      }).getTree())
        .toMatchSnapshot()
    })
  })

  describe('@evets', () => {
    beforeEach(() => jest.clearAllMocks())
    it('on click of classic tab when level is classic it should not call changeLevel', () => {
      const { wrapper, instance } = renderComponent(initialState)
      wrapper.find('.Header-tabs > div').first().simulate('click')
      expect(instance.props.changeLevel).not.toHaveBeenCalled()
    })
    it('on click of classic tab when level is advanced it should call changeLevel', () => {
      const { wrapper, instance } = renderComponent({
        ...initialState,
        level: 'advanced'
      })
      wrapper.find('.Header-tabs > div').first().simulate('click')
      expect(instance.props.changeLevel).toHaveBeenCalledTimes(1)
      expect(instance.props.changeLevel).toHaveBeenLastCalledWith('classic')
    })
    it('on click of advanced tab when level is advanced it should not call changeLevel', () => {
      const { wrapper, instance } = renderComponent({
        ...initialState,
        level: 'advanced'
      })
      wrapper.find('.Header-tabs > div').last().simulate('click')
      expect(instance.props.changeLevel).not.toHaveBeenCalled()
    })
    it('on click of advanced tab when level is classic it should call changeLevel', () => {
      const { wrapper, instance } = renderComponent(initialState)
      wrapper.find('.Header-tabs > div').last().simulate('click')
      expect(instance.props.changeLevel).toHaveBeenCalledTimes(1)
      expect(instance.props.changeLevel).toHaveBeenLastCalledWith('advanced')
    })
  })
})
