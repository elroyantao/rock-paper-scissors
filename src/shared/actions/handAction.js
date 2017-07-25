export const setPlayerHand = (playerHand) => ({
  type: 'SET_PLAYER_HAND',
  playerHand
})

export const setComputerHand = (computerHand) => ({
  type: 'SET_COMPUTER_HAND',
  computerHand
})

export const clearHand = () => ({
  type: 'CLEAR_HANDS'
})
