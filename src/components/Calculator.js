import React from 'react';
import './Calculator.css';

class Calculator extends React.PureComponent {
  render() {
    return (
      <>
        <div className="calc-result">0</div>
        <div className="buttons-grid">
          <button type="button" className="button">AC</button>
          <button type="button" className="button">&plusmn;</button>
          <button type="button" className="button">%</button>
          <button type="button" className="button">&divide;</button>
          <button type="button" className="button">7</button>
          <button type="button" className="button">8</button>
          <button type="button" className="button">9</button>
          <button type="button" className="button">X</button>
          <button type="button" className="button">4</button>
          <button type="button" className="button">5</button>
          <button type="button" className="button">6</button>
          <button type="button" className="button">-</button>
          <button type="button" className="button">1</button>
          <button type="button" className="button">2</button>
          <button type="button" className="button">3</button>
          <button type="button" className="button">+</button>
          <button type="button" className="button"> </button>
          <button type="button" className="button">0</button>
          <button type="button" className="button">.</button>
          <button type="button" className="button">=</button>
        </div>
      </>
    );
  }
}

export default Calculator;
