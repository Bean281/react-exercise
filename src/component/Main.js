import React, { Component } from 'react'
import { Players } from '../Shared/ListOfPlayers'
import PlayersPresentation from './PlayersPresentation'

export default class Main extends Component {
constructor() {
    super();
    this.state = {
        players:Players
    };
}

  render() {
    return <PlayersPresentation players = {this.state.players}/>
  }
}
