# README #


### How do I get set up? ###
* install dependency ```yarn install``` or ```npm install```
* run test ```yarn test``` or ```npm run test```
* build files ```yarn prod:build``` or ```npm run prod:build```
* run prod ```yarn prod``` or ```npm run prod```
* run dev ```yarn start``` or ```npm start```



The first step to solving the problem was to get the logic to decide who would win given the 2 hands played. Once that was written and tested I went about writing code for the UI.



### Approach
- wrote a function to compute the winner
- Wrote the hands component where the number of hands were hard coded
- Then wrote action and reducer to change state when when the user selects a hand.
- wrote a function to randomise the computer hand
- passed the playerhand and computer hand to findWinner function to find the winner
- on finding the winner update and keep track of the score in state

### extra functionality
- provided a way to change the level between classic and advanced
- classic: ```rock, paper, scissors```
- advanced ```rock, paper, scissors, lizard, spock```

### future improvement
- allow 2 player using sessions, and custom rooms
