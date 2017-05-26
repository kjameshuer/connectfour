import React from 'react';
import './menu.sass';

class Menu extends React.Component {

  handleButtonClick(){
    this.props.actions.initializeGameBoard(6,7)
    this.props.actions.setGameState('Play');
  }
  render() {
    return (
      <div className="menu-component">
       <button onClick={this.handleButtonClick.bind(this)}>Play game</button>
      </div>
    );
  }
}

Menu.displayName = 'Menu';
Menu.propTypes = {};
Menu.defaultProps = {};

export default Menu;
