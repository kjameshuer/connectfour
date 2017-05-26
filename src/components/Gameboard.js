import React from 'react';
import './gameboard.sass';

class Gameboard extends React.Component {


  handleColClick(colPosition,col,board){
    if (this.props.gameState.currentState !== 'Finished'){
      let player = this.props.gameState.currentPlayer;
      this.props.actions.addToCol(colPosition,col,board,player);
    }

  
  }

  render() {

    const gameBoardGrid = this.props.gameState.gameBoardArray.map((val,i,array)=>{
      return (
        <div key={`col-${i}`} className="grid-col" onClick={this.handleColClick.bind(this,i,val,array)}>
        {val.map((value,x,arr)=>{
          return (
            <div key={`colrow-${i}${x}`} className="grid-row">{value}</div>
          )
        })}
        </div>
      )
    })



    return (
      <div className="gameboard-component">
        {gameBoardGrid}
        <div>{this.props.gameState.currentError}</div>
      </div>
    );
  }
}

Gameboard.displayName = 'Gameboard';
Gameboard.propTypes = {};
Gameboard.defaultProps = {};

export default Gameboard;
