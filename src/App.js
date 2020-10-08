import React from 'react';
import './App.css';

// Components
import Header from './components/Header';
import Player from './components/Player';


export default function App (props) {
  return (
    <div className="scoreboard">
    <Header title="Scoreboad" totalPlayers={props.initialPlayers.length}/>

    {/* Total Players List */}
    {props.initialPlayers.map(player => 
    <Player name={player.name}
            key={player.id.toString()}
            />
    )}

    </div>
  );
}