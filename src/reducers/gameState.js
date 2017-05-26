
import {GAME_STATE} from '../actions/const';

const initialState = {
  currentState: 'Menu',
  boardWidth: 7,
  boardHeight: 6,
  gameBoardArray: [],
  currentPlayer: 1,
  currentError: ''
};

function reducer(state = initialState, action) {


  switch (action.type) {

    case GAME_STATE: {

      return { ...state, currentState: action.payload};
    }
    case 'RESET_GAME_STATE': {
      return initialState;
    }

    case 'SET_GAME_BOARD': {
      const player = (state.currentPlayer + 1) % 2;
      return {...state, gameBoardArray: action.payload, currentError: '', currentPlayer: player};
    }

    case 'SWITCH_PLAYER': {

      const player = (state.currentPlayer + 1) % 2;

      return {...state, currentPlayer: player};
    }
    case 'SHOW_ERROR': {

      return {...state, currentError: action.payload};
    }
    default: {

      return state;
    }
  }
}

module.exports = reducer;
