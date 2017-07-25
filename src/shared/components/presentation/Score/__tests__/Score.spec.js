import testComponentHelper from '../../../../lib/test-helper'
import Score from '../Score'


describe('<Score /> ', () => {
  const initialState = {
    playerScore: 0,
    computerScore: 0
  }
  const renderComponent = testComponentHelper(Score.WrappedComponent)
  describe('@renders', () => {
    it('in default state', () => {
      expect(renderComponent(initialState).getTree())
        .toMatchSnapshot()
    })
    it('when score is player 6 - 4 computer', () => {
      expect(renderComponent({
        playerScore: 6,
        computerScore: 4
      }).getTree())
        .toMatchSnapshot()
    })
  })
})
