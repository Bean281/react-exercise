import React, { Component } from "react";
import { Players } from "../Shared/ListOfPlayers";

export default class PlayersDemo extends Component {
  render() {
    return (
      <div className="container">
        {Players.map((player) => (
          <div className="column" key={player.id}>
            <div className="card">
              <img src={player.img} alt="Footballer's img"/>
              <h3>{player.name}</h3>
              <p className="title"></p>
              <p>
                <button>Detail</button>
              </p>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
