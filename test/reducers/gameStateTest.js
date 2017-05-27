var reducer = require('../../src/reducers/gameState');

let gameBoard = [
  [[' '],[' '],[' '],[' '],[' '],[' '],[' ']],
  [[' '],[' '],[' '],[' '],[' '],[' '],[' ']],
  [[' '],[' '],[' '],[' '],[' '],[' '],[' ']],
  [[' '],[' '],[' '],[' '],[' '],[' '],[' ']],
  [[' '],[' '],[' '],[' '],[' '],[' '],[' ']],
  [[' '],[' '],[' '],[' '],[' '],[' '],[' ']]
]


describe('gameState', () => {

  it('should not change the passed state', (done) => {

    const state = Object.freeze({});
    reducer(state, {type: 'INVALID'});

    var thisGame = gameBoard;
    thisGame[0][3] = 'O';
    reducer(state, {type: 'SET_GAME_BOARD',payload:thisGame})

    reducer(state, {type:'GAME_STATE',payload:'Finished'})

    reducer(state, {type:'RESET_GAME_STATE'})

    reducer(state, {type:'SWITCH_PLAYER',payload:'Finished'})

    reducer(state, {type:'SHOW_ERROR',payload:'THIS IS AN ERROR'})

    done();
  });
});
