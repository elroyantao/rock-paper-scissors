import { setPlayerHand, setComputerHand } from './handAction'
import { playerWins, computerWins, itsATie } from './scoreAction'

export function findWinner(player1, player2) {
  if ((player2 + 1) % 5 === player1 || (player2 + 2) % 5 === player1) return 1
  else if (player2 === player1) return 0
  return 2
}

export const getComputerHand = (availableHands) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const hand = availableHands[Math.floor(Math.random() * availableHands.length)]
      resolve(hand)
    }, 1000)
  })
}

export const applyHand = (playerHand) => async (dispatch, getState) => {
  const state = getState()
  dispatch(setPlayerHand(playerHand))
  const computerHand = await getComputerHand(state.level.hands)
  dispatch(setComputerHand(computerHand))
  const winner = findWinner(playerHand, computerHand)
  if (!winner) dispatch(itsATie())
  else if (winner === 1) dispatch(playerWins())
  else if (winner === 2) dispatch(computerWins())
}
