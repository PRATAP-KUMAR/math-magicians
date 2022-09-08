import React from 'react';
import './Calculator.css';
import calculate from '../logic/calculate';

// const array = [];

class Calculator extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
  }

  handleInput = (e) => {
    const myVar = e.target.textContent;
    const obj = calculate(this.state, myVar);
    this.setState(obj);
  };

  render() {
    const { total, next, operation } = this.state;
    return (
      <>
        <div className="calc-result">{next || operation || total || 0}</div>
        <div className="buttons-grid">
          <button type="button" className="button" value="AC" onClick={(e) => this.handleInput(e)}>AC</button>
          <button type="button" className="button" value="&plusmn;" onClick={(e) => this.handleInput(e)}>&plusmn;</button>
          <button type="button" className="button" value="%" onClick={(e) => this.handleInput(e)}>%</button>
          <button type="button" className="button" value="&divide;" onClick={(e) => this.handleInput(e)}>&divide;</button>
          <button type="button" className="button" value="7" onClick={(e) => this.handleInput(e)}>7</button>
          <button type="button" className="button" value="8" onClick={(e) => this.handleInput(e)}>8</button>
          <button type="button" className="button" value="9" onClick={(e) => this.handleInput(e)}>9</button>
          <button type="button" className="button" value="x" onClick={(e) => this.handleInput(e)}>x</button>
          <button type="button" className="button" value="4" onClick={(e) => this.handleInput(e)}>4</button>
          <button type="button" className="button" value="5" onClick={(e) => this.handleInput(e)}>5</button>
          <button type="button" className="button" value="6" onClick={(e) => this.handleInput(e)}>6</button>
          <button type="button" className="button" value="-" onClick={(e) => this.handleInput(e)}>-</button>
          <button type="button" className="button" value="1" onClick={(e) => this.handleInput(e)}>1</button>
          <button type="button" className="button" value="2" onClick={(e) => this.handleInput(e)}>2</button>
          <button type="button" className="button" value="3" onClick={(e) => this.handleInput(e)}>3</button>
          <button type="button" className="button" value="+" onClick={(e) => this.handleInput(e)}>+</button>
          <button type="button" className="button"> </button>
          <button type="button" className="button" value="0" onClick={(e) => this.handleInput(e)}>0</button>
          <button type="button" className="button" value="." onClick={(e) => this.handleInput(e)}>.</button>
          <button type="button" className="button" value="=" onClick={(e) => this.handleInput(e)}>=</button>
        </div>
      </>
    );
  }
}

export default Calculator;
