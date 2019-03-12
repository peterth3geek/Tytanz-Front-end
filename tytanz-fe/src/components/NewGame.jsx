import React from 'react';

export default class NewGame extends React.Component{

  render () {
    return (
      <div>
        <button onClick={this.props.resetGame}>New Game</button>
      </div>
    )
  }
}
