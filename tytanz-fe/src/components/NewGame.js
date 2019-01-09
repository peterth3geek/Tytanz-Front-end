import React from 'react';

export default class NewGame extends React.Component{

  render () {
    return (
      <div>
        <button onClick={this.props.doThing}>Hello NewGame</button>
      </div>
    )
  }
}
