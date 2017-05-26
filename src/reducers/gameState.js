/* Define your initial state here.
 *
 * If you change the type from object to something else, do not forget to update
 * src/container/App.js accordingly.
 */
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
  /* Keep the reducer clean - do not mutate the original state. */
  // const nextState = Object.assign({}, state);

  switch (action.type) {
   
    case GAME_STATE: {
      // Modify next state depending on the action and return it
      return {...state,currentState:action.payload}
    }
    case 'RESET_GAME_STATE': {
      return initialState;
    }

    case 'SET_GAME_BOARD':{
      let player = (state.currentPlayer+1) % 2;
      return {...state,gameBoardArray:action.payload,currentError:'',currentPlayer:player}
    }

    case 'SWITCH_PLAYER':{
     
      let player = (state.currentPlayer+1) % 2;

      return {...state,currentPlayer:player}
    }
    case 'SHOW_ERROR': {

      return {...state,currentError:action.payload}
    }
    default: {
      /* Return original state if no actions were consumed. */
      return state;
    }
  }
}

module.exports = reducer;
