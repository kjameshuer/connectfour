import React from 'react';
import PropTypes from 'prop-types';

import './app.css';

import Menu from './Menu';
import Gameboard from './Gameboard';

class AppComponent extends React.Component {

  constructor(props) {
    super(props);

    this.handleReset = this.handleReset.bind(this);

  }

  handleReset() {
    this.props.actions.resetGame();
  }

  render() {

    const { actions, gameState } = this.props;
    return (
      <div className="index">
        {(this.props.gameState.currentState === 'Menu') ?
          <Menu gameState={gameState} actions={actions} /> :
          <Gameboard gameState={gameState} actions={actions} />}

        {this.props.gameState.currentState === 'Finished' &&
          <div>{`Winner is player ${this.props.gameState.currentPlayer + 1}`}
            <button onClick={this.handleReset}>Reset</button>
          </div>}
      </div>
    );
  }
}

AppComponent.propTypes = {
  gameState: PropTypes.shape({

    currentState: PropTypes.string,
    currentPlayer: PropTypes.number
  }),
  actions: PropTypes.shape({
    resetGame: PropTypes.func
  })
};

AppComponent.defaultProps = {
  gameState: { currentState: 'Menu', currentPlayer: 0 },
  actions: {}
};

export default AppComponent;
