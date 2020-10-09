import React from 'react';

// components
import Stats from './Stats';

const Header = (props) => {
    return (
      <header>
      <Stats 
        players={props.players}
        />
      <h1>{props.title}</h1>
    </header>
    );
    }
    
export default Header;