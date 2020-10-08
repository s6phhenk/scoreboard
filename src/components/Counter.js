import React from 'react';

class Counter extends React.Component {

  state = {
    score: 0
  }

  incrementScore = () => {
    this.setState({
      score: this.state.score +1
    })
  }

  render() {
    return (
        <div className="counter">
          <button className="counter-action decrement"> - </button>
          <span className="counter-score">{this.state.score}</span>
          <button className="counter-action increment" 
                  onClick={this.incrementScore}> + </button>
        </div>
    );
}
}

export default Counter; 