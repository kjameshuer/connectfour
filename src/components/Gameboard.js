import React from 'react';
import PropTypes from 'prop-types';
import './gameboard.sass';

class Gameboard extends React.Component {

  handleClick(colPosition, col) {
    this.handleColClick(colPosition, col);
  }
  handleColClick(colPosition, col) {

    if (this.props.gameState.currentState === 'Play') {
      const player = this.props.gameState.currentPlayer;
      const turn = this.props.gameState.currentTurn;
      const gbArray = this.props.gameState.gameBoardArray;

      this.props.actions.addToCol(colPosition, col, gbArray, player, turn, this.props.gameState);

    }

  }

  render() {

    const gameBoardGrid = this.props.gameState.gameBoardArray.map((val, i) => {
      return (
        <div key={`col-${i}`} className="grid-col" onClick={() => this.handleClick(i, val)}>
          {val.map((value, x) => {

            let extraClass = '';
            if (value.props.children === 'O') extraClass = 'p1';
            if (value.props.children === 'X') extraClass = 'p2';

            return (
              <div key={`colrow-${i}${x}`} className={`grid-row ${extraClass}`}>{value}</div>
            );
          })}
        </div>
      );
    });

    return (
      <div className="gameboard-component">
        {gameBoardGrid}
        <div className="error">{this.props.gameState.currentError}</div>
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
    gameBoardArray: PropTypes.array,
    currentTurn: PropTypes.number
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
