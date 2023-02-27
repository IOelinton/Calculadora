import React from 'react';

function calculadora() {
    const Value = 'Nan'

  const handleClick = (e) => {
  }
  
  const calculate = () => {
  }
  
  const clear = () => {

  }
  
  return (
    <div className="calculator">
      <div className="result">{Value}</div>
      <div className="buttons">
        <div className='Numeros'>
            <button onClick={handleClick} name="7">7</button>
            <button onClick={handleClick} name="8">8</button>
            <button onClick={handleClick} name="9">9</button>
            <button onClick={handleClick} name="4">4</button>
            <button onClick={handleClick} name="5">5</button>
            <button onClick={handleClick} name="6">6</button>
            <button onClick={handleClick} name="1">1</button>
            <button onClick={handleClick} name="2">2</button>
            <button onClick={handleClick} name="3">3</button>
            <button onClick={handleClick} name="0">0</button>
            <button onClick={handleClick} name="0">0</button>
            <button onClick={handleClick} name="00">00</button>
        </div>
        <div className='operadores'>
            <div className='horizontal'>
                <button onClick={clear} id="clear">Clear</button>
                <button onClick={handleClick} name="%">/</button>
                <button onClick={handleClick} name="/">/</button>
                <button onClick={handleClick} name="*">*</button>
            </div>
            
            <div className='vertical'>
                <button onClick={handleClick} name="-">-</button>
                <button onClick={handleClick} name="+">+</button>
                <button onClick={handleClick} name=".">.</button>
                <button onClick={calculate} id="equal">=</button>
            </div>
        </div>
      </div>
    </div>
  );
}

export default calculadora;
