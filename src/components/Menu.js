import React from 'react';
import PropTypes from 'prop-types';

import './menu.sass';

class Menu extends React.Component {

  constructor(props) {
    super(props);

    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  handleButtonClick() {
    this.props.actions.initializeGameBoard(6, 7);
    this.props.actions.setGameState('Play');
  }
  render() {

    return (
      <div className="menu-component">
        <button onClick={this.handleButtonClick}>Play game</button>
      </div>
    );
  }
}

Menu.displayName = 'Menu';
Menu.propTypes = {
  actions: PropTypes.shape({
    initializeGameBoard: PropTypes.func,
    setGameState: PropTypes.func
  })
};
Menu.defaultProps = {};

export default Menu;
