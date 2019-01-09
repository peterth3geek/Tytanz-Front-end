import React from 'react';
// import { Switch, Route } from 'react-router-dom'

import Attack from './attack'
import NewGame from './NewGame'


export default class Hunt extends React.Component{

  state = {
    hunter: {},
    quarry: {},
    victory: false
  }

  createHunter = () => {

    const hunter = {
    name: 'Orion',
    target: 'Blights',
    terrain: 'Arcadian Marsh',
    pronoun: 'He',
    stats: {
      health: 20,
      attack: 5
    }
  }
    this.setState(prevState =>(
      {...prevState,
        hunter: hunter}
    ))
  }

  createQuarry = () => {
    const quarry ={
      type: 'Blight',
      name: 'Axel',
      stats: {
        health: 10,
        attack: 4
      }
    }
    this.setState(prevState => (
      {...prevState,
        quarry: quarry
      }
    ))
  }

  victoryReset = () => {
    this.setState(prevState => (
      {...prevState,
        victory: false
      }
    ))
  }

  goHunting = () => {
    const hunter = this.state.hunter
    const quarry = this.state.quarry
    return(
      <div>
      <p>Meet {hunter.name}!</p>
      <p>{hunter.pronoun} is hunting {quarry.name} at {hunter.terrain}</p>
      </div>
    )
  }

  displayUnits = () => {
    const hunter = this.state.hunter
    const quarry = this. state.quarry
    console.log(this.state)
    return(
      <div id='encasing-div' className="encasing-div">
      <div id='hunter-div' className="small-div">
      <p>{hunter.name}</p>
      <p>Health: {hunter.stats.health}</p>
      <p>Attack: {hunter.stats.attack}</p>
      </div>
      <div id='quarry-div' className="small-div">
      <p>{quarry.name}</p>
      <p>Health: {quarry.stats.health}</p>
      <p>Attack: {quarry.stats.attack}</p>
      </div>
      </div>
    )
  }

  hunterAttack = () => {
    const hunterDamage = this.state.hunter.stats.attack
    const quarryHealth = this.state.quarry.stats.health

    let newHealth = quarryHealth - hunterDamage
    console.log(newHealth)

    this.setState(prevState => (
      {...prevState,
      quarry: {
        ...prevState.quarry,
        stats: {...prevState.quarry.stats,
          health: newHealth
        }

      }}
    ))
  }

  resetGame = () => {
    this.createQuarry()
    this.victoryReset()
  }

  gameOn = () => {
    return(
      <div>
      {this.displayUnits()}
      <Attack doThing={this.hunterAttack}/>
      {this.goHunting()}
      </div>
    )
  }

  gameOff = () => {
    return(
      <div>
      <NewGame doThing={this.resetGame}/>
      </div>
    )
  }

  componentWillMount(){
    this.createHunter()
    this.createQuarry()
  }

  componentDidUpdate(){
    if(this.state.victory){
    } else if (this.state.quarry.stats.health <=0) {
      this.setState(prevState => (
        {
          ...prevState,
          victory: true
        }
      ))
    }
  }

  render () {
    return (
      <div>
      { this.state.victory ?
        this.gameOff()
        :
        this.gameOn()
}
      </div>
    )
  }
}
