import * as actions from '../rpslsAction'
import * as rpsls from '../../lib/rpsls-map'
import { setPlayerHand, setComputerHand } from '../handAction'
import { playerWins, computerWins, itsATie } from '../scoreAction'

jest.mock('../handAction', () => ({
  setPlayerHand: jest.fn(),
  setComputerHand: jest.fn()
}))
jest.mock('../scoreAction', () => ({
  itsATie: jest.fn(),
  playerWins: jest.fn(),
  computerWins: jest.fn()
}))

const rpslsArray = rpsls.advanced

describe('rpslsAction', () => {
  describe('findWinner', () => {
    it('when player1 is Rock and player2 is Rock 1 the response should be 0 / TIE', () => {
      expect(actions.findWinner(rpsls.ROCK, rpsls.ROCK)).toBe(0)
    })
    it('when player1 is Rock and player2 is Scissors 1 the response should be 1 / player1', () => {
      expect(actions.findWinner(rpsls.ROCK, rpsls.SCISSORS)).toBe(1)
    })
    it('when player1 is LIZARD and player2 is SPOCK 1 the response should be 1 / player1', () => {
      expect(actions.findWinner(rpsls.LIZARD, rpsls.SPOCK)).toBe(1)
    })
    it('when player1 is PAPER and player2 is SCISSORS 1 the response should be 2 / player2', () => {
      expect(actions.findWinner(rpsls.PAPER, rpsls.SCISSORS)).toBe(2)
    })
    rpslsArray.forEach((player1) => {
      rpslsArray.forEach((player2) => {
        it(`snapshot the winners when player1 is ${Object.keys(rpsls)[player1]} and player2 is ${Object.keys(rpsls)[player2]}`, () => {
          expect(actions.findWinner(player1, player2))
            .toMatchSnapshot()
        })
      })
    })
  })
  describe('getComputerHand', () => {
    beforeEach(() => jest.clearAllMocks())
    it('should give select a random hand from the availableHands and despond after 1s', () => {
      expect.assertions(1)
      return actions.getComputerHand(rpslsArray).then((hand) => {
        expect(rpslsArray.includes(hand)).toBe(true)
      })
    })
    it('should call the setTimeout to 1s', () => {
      jest.useFakeTimers()
      actions.getComputerHand(rpslsArray)
      expect(setTimeout.mock.calls.length).toBe(1)
      expect(setTimeout.mock.calls[0][1]).toBe(1000)
      jest.useRealTimers()
    })
  })

  describe('applyHand', () => {
    // jest.useFakeTimers()
    const dispatch = jest.fn(val => val)
    const getState = jest.fn(() => ({
      level: {
        hands: rpslsArray
      }
    }))
    const action = actions.applyHand(2)
    beforeAll(() => {
      actions.default.__Rewire__('getComputerHand', jest.fn(() => 2))
    })
    afterAll(() => {
      actions.default.__ResetDependency__('getComputerHand')
    })
    beforeEach(() => jest.clearAllMocks())

    it('should call dispatch 3 times and getState 1 time', async () => {
      await action(dispatch, getState)
      expect(dispatch).toHaveBeenCalledTimes(3)
      expect(getState).toHaveBeenCalledTimes(1)
    })
    it('should call setPlayerHand and setComputerHand 1 time', async () => {
      await action(dispatch, getState)
      expect(setPlayerHand).toHaveBeenCalledTimes(1)
      expect(setComputerHand).toHaveBeenCalledTimes(1)
    })
    it('should call getComputerHand 1 time', async () => {
      await action(dispatch, getState)
      expect(actions.default.__get__('getComputerHand')).toHaveBeenCalledTimes(1)
    })
    it('should call itsATie when both select the same', async () => {
      const action = actions.applyHand(2)
      await action(dispatch, getState)
      expect(itsATie).toHaveBeenCalledTimes(1)
      expect(playerWins).not.toHaveBeenCalled()
      expect(computerWins).not.toHaveBeenCalled()
    })
    it('should call playerWins when player selects Scissors and computer selects paper', async () => {
      const action = actions.applyHand(4)
      await action(dispatch, getState)
      expect(playerWins).toHaveBeenCalledTimes(1)
      expect(itsATie).not.toHaveBeenCalled()
      expect(computerWins).not.toHaveBeenCalled()
    })
    it('should call computerWins when player selects rock and computer selects paper', async () => {
      const action = actions.applyHand(0)
      await action(dispatch, getState)
      expect(computerWins).toHaveBeenCalledTimes(1)
      expect(itsATie).not.toHaveBeenCalled()
      expect(playerWins).not.toHaveBeenCalled()
    })
  })
})
