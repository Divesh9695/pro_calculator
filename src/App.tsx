
import React, { useState } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState('');

  const handleClick = (value: string) => {
    setInput(input +value );
  };


  const evaluateExpression = () => {
    try {
      const result = eval(input);
      setInput(result.toString());
    } catch (error) {
      setInput('Error');
    }
  };

  const clearInput = () => {
    setInput('');
  }
  function dellInput () {
    setInput(input.toString().slice(0, -1));
  }

  return (
    <div className='cal_hed'>
       <h1>CALCULATOR</h1> 
    <div className="calculator">
      <input
        type="text" placeholder='0'
        className="calculator-screen"
        value={input}
        disabled
      />
      <div><input type=" " /><h1></h1> </div>
      <div className="calculator-keys">
        <button onClick={() => handleClick('7')}>7</button>
        <button onClick={() => handleClick('8')}>8</button>
        <button onClick={() => handleClick('9')}>9</button>
        <button onClick={() => handleClick('+')}>+</button>
        <button onClick={() => handleClick('4')}>4</button>
        <button onClick={() => handleClick('5')}>5</button>
        <button onClick={() => handleClick('6')}>6</button>
        <button onClick={() => handleClick('-')}>-</button>
        <button onClick={() => handleClick('1')}>1</button>
        <button onClick={() => handleClick('2')}>2</button>
        <button onClick={() => handleClick('3')}>3</button>
        <button onClick={() => handleClick('*')}>*</button>
        <button onClick={() => handleClick('0')}>0</button>
        <button onClick={() => handleClick('.')}>.</button>
        <button onClick={() => handleClick('%')}>%</button>
        <button onClick={dellInput}>DELL</button>
        <button onClick={() => handleClick('+/-')}>+/-</button>
        <button onClick={clearInput}>C</button>
        <button onClick={() => handleClick('/')}>/</button>
        <button onClick={evaluateExpression}>=</button>
      </div>
    </div>
    </div>
  );
}

export default App;


