import React from 'react';

export default class Attack extends React.Component{


  render () {
    return (
      <div>
        <button onClick={this.props.doThing}>Attack!</button>
      </div>
    )
  }
}
