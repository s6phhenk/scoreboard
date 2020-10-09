import React, {Component} from 'react';
import './App.css';

// Components
import Header from './components/Header';
import Player from './components/Player';
import AddPlayerInput from './components/AddPlayerInput';


class App extends Component {

  state = {
    players : [
      {
        name: "Gil",
        score:0,
        id: 1
      },
      {
        name: "Alex",
        score:0,
        id: 2
      },
      {
        name: "Julia",
        score:0,
        id: 3
      },
      {
        name: "Gimra",
        score:0,
        id: 4
      }
    ],
  };

    handleRemovePlayer = (id) => {
      this.setState(prevState => {
        return {
        players: prevState.players.filter(p => p.id !== id)
        }
      });
    };

    handleScoreChange = (index, delta) => {
      this.setState(prevState => ({
        //this will return a new copy of the players array with value
         players: prevState.players.map((player, i) => {
              if(i === index) player.score += delta;
              return player;
        })
     }));
    }

  render () {
    return (
      <div className="scoreboard">
      <Header title="Scoreboard" 
              players={this.state.players}
              />
              
  
      {/* Total Players List */}
      {this.state.players.map( (player, index) => 
      <Player name={player.name}
              index={index}
              score={player.score}
              key={player.id.toString()}
              id={player.id}
              removePlayer={this.handleRemovePlayer}
              changeScore={this.handleScoreChange}
              />
      )}
      <AddPlayerInput />
  
      </div>
    );

  }

}
export default App; 