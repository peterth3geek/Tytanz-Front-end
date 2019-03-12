import React from 'react';

export default class Attack extends React.Component{


  render () {
    return (
      <div>
        <button onClick={this.props.hunterAttack}>Attack!</button>
      </div>
    )
  }
}
