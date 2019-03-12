import React from 'react';
// import { Switch, Route } from 'react-router-dom'

import Attack from './AttackButton'
import NewGame from './NewGame'
import DisplayCard from './DisplayCard';


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

  displayUnit = (unitType) => {
    const unit = this.state[unitType]
    return(
      <div id={unitType + "-div"} className="small-div">
        <DisplayCard
          name={unit.name}
          health={unit.stats.health}
          attack={unit.stats.attack}
          type={unitType}
           />
      </div>
    )
  }

  hunterAttack = () => {
    const hunterDamage = this.state.hunter.stats.attack
    const quarryHealth = this.state.quarry.stats.health

    let newHealth = quarryHealth - hunterDamage

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
      <Attack hunterAttack={this.hunterAttack}/>
      {this.goHunting()}
      </div>
    )
  }

  gameOff = () => {
    return(
      <div>
      <NewGame resetGame={this.resetGame}/>
      </div>
    )
  }

  gameState = () => {
    return (
      <div>
        <div className="encasing-div">
          {this.displayUnit('hunter')}
          {this.displayUnit('quarry')}
        </div>
        <div>
          {
            this.state.victory ?
            this.gameOff()
            :
            this.gameOn()
          }
        </div>
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
        { this.gameState() }
      </div>
    )
  }
}
