import testComponentHelper from '../../../../lib/test-helper'
import Main from '../Main'

describe('<Main /> ', () => {
  const initialState = {}
  const renderComponent = testComponentHelper(Main)
  describe('@renders', () => {
    it('in default state', () => {
      expect(renderComponent(initialState).getTree())
        .toMatchSnapshot()
    })
  })
})
