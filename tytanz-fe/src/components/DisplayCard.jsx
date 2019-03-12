import React, { Component } from 'react'

export default class DisplayCard extends Component {
  render() {
    return (
      <div class={'small-div--' + this.props.type } >
        <h3>{this.props.name}</h3>
        <p>Health: {this.props.health}</p>
        <p>Attack: {this.props.attack}</p>
        <p>{this.props.message}</p>
      </div>
    )
  }
}
