import React, {Component} from 'react';
import './App.css';

// Components
import Header from './components/Header';
import Player from './components/Player';


class App extends Component {

  state = {
    players : [
      {
        name: "Gil",
        id: 1
      },
      {
        name: "Alex",
        id: 2
      },
      {
        name: "Julia",
        id: 3
      },
      {
        name: "Gimra",
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
  
  render () {
    return (
      <div className="scoreboard">
      <Header title="Scoreboad" 
              totalPlayers={this.state.players.length}/>
  
      {/* Total Players List */}
      {this.state.players.map(player => 
      <Player name={player.name}
              key={player.id.toString()}
              id={player.id}
              removePlayer={this.handleRemovePlayer}
              />
      )}
  
      </div>
    );

  }

}
export default App; 