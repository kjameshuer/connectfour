import React from 'react';

import './app.css';

import Menu from './Menu';
import Gameboard from './Gameboard';

class AppComponent extends React.Component {

  handleReset(){
    this.props.actions.resetGame();
  }

  render() {
   const { actions, gameState} = this.props;
    return (
      <div className="index">
      {(this.props.gameState.currentState === 'Menu') ? <Menu gameState={gameState} actions={actions}  /> : <Gameboard gameState={gameState} actions={actions} />}
      {this.props.gameState.currentState === 'Finished' && <div>{`Winner is player ${this.props.gameState.currentPlayer+1}`}<button onClick={this.handleReset.bind(this)}>Reset</button></div> }
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
