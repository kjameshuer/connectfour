import React from 'react';
import PropTypes from 'prop-types';
import './gameboard.sass';

class Gameboard extends React.Component {

  handleClick(colPosition, col) {
    this.handleColClick(colPosition, col);
  }
  handleColClick(colPosition, col) {

    if (this.props.gameState.currentState !== 'Finished') {
      const player = this.props.gameState.currentPlayer;
      this.props.actions.addToCol(colPosition, col, this.props.gameState.gameBoardArray, player);
    }

  }

  render() {

    const gameBoardGrid = this.props.gameState.gameBoardArray.map((val, i) => {
      return (
        <div key={`col-${i}`} className="grid-col" onClick={() => this.handleClick(i, val)}>
          {val.map((value, x) => {
            return (
              <div key={`colrow-${i}${x}`} className="grid-row">{value}</div>
            );
          })}
        </div>
      );
    });

    return (
      <div className="gameboard-component">
        {gameBoardGrid}
        <div>{this.props.gameState.currentError}</div>
      </div>
    );
  }
}

Gameboard.displayName = 'Gameboard';

Gameboard.propTypes = {
  gameState: PropTypes.shape({
    currentError: PropTypes.string,
    currentState: PropTypes.string,
    currentPlayer: PropTypes.number,
    gameBoardArray: PropTypes.array
  }),
  actions: PropTypes.shape({
    resetGame: PropTypes.func,
    addToCol: PropTypes.func
  })
};
Gameboard.defaultProps = {
  gameState: {
    currentError: '',
    currentState: '',
    currentPlayer: 0,
    gameBoardArray: []
  },
  actions: {}
};

export default Gameboard;
