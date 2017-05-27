import React from 'react';

import { GAME_STATE } from './const';


exports.setGameState = function (parameter) {
  return { type: GAME_STATE, payload: parameter };
};

exports.resetGameState = function () {
  return { type: 'RESET_GAME_STATE' };
};

exports.initializeGameBoard = function (boardWidth, boardHeight) {


  const gameBoardArray = [];

  for (let i = 0; i < boardWidth; i++) {
    gameBoardArray.push([]);

    for (let x = 0; x < boardHeight; x++) {
      gameBoardArray[i].push(<span className="blank">{`${' '}`}</span>);
    }

  }

  return { type: 'SET_GAME_BOARD', payload: gameBoardArray, firstTime: true };

};

exports.addToCol = function (colPosition, col, board, player, turn, curProps) {
  const newGameBoard = board;
  const curCol = newGameBoard[colPosition];
  const curColLen = curCol.length - 1;
  const curTurn = curProps.currentTurn;


  for (let i = curColLen; i >= 0; i--) {

    if (curCol[i].props.children === ' ') {

      newGameBoard[colPosition][i] = (player === 0) ? <span className="marker">O</span> : <span className="marker">X</span>;

      if (checkForWin(newGameBoard, colPosition, i, curProps.currentPlayer)) {
        return { type: GAME_STATE, payload: 'Finished' };
      }
      if (curTurn === 42) {
        return { type: GAME_STATE, payload: 'Draw' }
      }

      return { type: 'SET_GAME_BOARD', payload: newGameBoard };

    }
  }

  return { type: 'SHOW_ERROR', payload: 'This column is full, select a different column' };

};

exports.switchPlayer = function () {

  return { type: 'SWITCH_PLAYER' };
};


exports.resetGame = function () {
  return { type: 'RESET_GAME_STATE' };
};

function checkForWin(board, curCol, curRow, player) {
  const thisPlayerMarker = (player === 0) ? 'OOOO' : 'XXXX';
  return checkForVertical(board, curCol, thisPlayerMarker) ||
    checkForHorizontal(board, curRow, thisPlayerMarker) ||
    checkForDiagonalToRight(board, curCol, curRow, thisPlayerMarker) ||
    checkForDiagonalToLeft(board, curCol, curRow, thisPlayerMarker);

}

function checkForVertical(board, curCol, thisPlayerMarker) {


  const vertString = (board[curCol].map((val) => { return val.props.children; })).join('');
  if (vertString.indexOf(thisPlayerMarker) > -1) { return true; }
  return false;
}

function checkForHorizontal(board, curRow, thisPlayerMarker) {

  const horzStr = board.map((val) => { return val[curRow].props.children; }).join('');
  if (horzStr.indexOf(thisPlayerMarker) > -1) { return true; }
  return false;
}

function checkForDiagonalToRight(board, curCol, curRow, thisPlayerMarker) {

  const columnMax = board.length - 1;
  const rowMax = board[0].length - 1;


  let beginningCol;
  let beginningRow;
  let diagString = '';

  let checkingRow = curRow;

  for (let i = curCol; i >= 0; i--) {

    if (i === 0 || checkingRow >= rowMax) {
      beginningCol = i;
      beginningRow = checkingRow;
      break;
    }

    checkingRow++;
  }

  while (beginningCol <= columnMax && beginningRow >= 0) {
    diagString += board[beginningCol][beginningRow].props.children;
    beginningCol++;
    beginningRow--;
  }


  if (diagString.indexOf(thisPlayerMarker) > -1) return true;

  return false;

}


function checkForDiagonalToLeft(board, curCol, curRow, thisPlayerMarker) {

  const columnMax = board.length - 1;
  const rowMax = board[0].length - 1;
  let beginningCol;
  let beginningRow;
  let diagString = '';
  let checkingRow = curRow;

  for (let i = curCol; i >= 0; i--) {
    if (i === 0 || checkingRow <= 0) {
      beginningCol = i;
      beginningRow = checkingRow;
      break;
    }
    checkingRow--;
  }

  while (beginningCol <= columnMax && beginningRow <= rowMax) {
    diagString += board[beginningCol][beginningRow].props.children;
    beginningCol++;
    beginningRow++;
  }

  if (diagString.indexOf(thisPlayerMarker) > -1) return true;

  return false;

}
