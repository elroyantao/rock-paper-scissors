import testComponentHelper from '../../../../lib/test-helper'
import Header from '../Header'

describe('<Header /> ', () => {
  const renderComponent = testComponentHelper(Header)
  describe('@renders', () => {
    it('in default state', () => {
      expect(renderComponent({}).getTree())
        .toMatchSnapshot()
    })
  })
})
