import React, { useState } from 'react';
import './Calculator.css';
import calculate from '../logic/calculate';

const initObj = {
  total: null,
  next: null,
  operation: null,
};

const Calculator = () => {
  const [obj, setObj] = useState(initObj);

  const handleInput = (e) => {
    setObj(() => calculate(obj, e.target.textContent));
  };

  const { total, next, operation } = obj;

  return (
    <>
      <div className="calc-result">{next || operation || total || 0}</div>
      <div className="buttons-grid">
        <button type="button" className="button" value="AC" onClick={(e) => handleInput(e)}>AC</button>
        <button type="button" className="button" value="+/-" onClick={(e) => handleInput(e)}>+/-</button>
        <button type="button" className="button" value="%" onClick={(e) => handleInput(e)}>%</button>
        <button type="button" className="button" value="&divide;" onClick={(e) => handleInput(e)}>&divide;</button>
        <button type="button" className="button" value="7" onClick={(e) => handleInput(e)}>7</button>
        <button type="button" className="button" value="8" onClick={(e) => handleInput(e)}>8</button>
        <button type="button" className="button" value="9" onClick={(e) => handleInput(e)}>9</button>
        <button type="button" className="button" value="x" onClick={(e) => handleInput(e)}>x</button>
        <button type="button" className="button" value="4" onClick={(e) => handleInput(e)}>4</button>
        <button type="button" className="button" value="5" onClick={(e) => handleInput(e)}>5</button>
        <button type="button" className="button" value="6" onClick={(e) => handleInput(e)}>6</button>
        <button type="button" className="button" value="-" onClick={(e) => handleInput(e)}>-</button>
        <button type="button" className="button" value="1" onClick={(e) => handleInput(e)}>1</button>
        <button type="button" className="button" value="2" onClick={(e) => handleInput(e)}>2</button>
        <button type="button" className="button" value="3" onClick={(e) => handleInput(e)}>3</button>
        <button type="button" className="button" value="+" onClick={(e) => handleInput(e)}>+</button>
        <button type="button" className="button"> </button>
        <button type="button" className="button" value="0" onClick={(e) => handleInput(e)}>0</button>
        <button type="button" className="button" value="." onClick={(e) => handleInput(e)}>.</button>
        <button type="button" className="button" value="=" onClick={(e) => handleInput(e)}>=</button>
      </div>
    </>
  );
};

export default Calculator;
