import './App.css';
import { useState } from 'react'
import { evaluate, re } from 'mathjs'

function App() {
  const [value, setValue] = useState('0');
  const [lastValue, setLastValue] = useState('');

  
  const click = (event) => {
    const e = document.getElementById(event.target.id).getAttribute('value');
    const special = ['/', '-', '+', 'X', 0];

    switch(e) {

      case "AC":  
        setValue('');
        setLastValue('');
        break;

      case "/":
        if (lastValue != '') {
          if (value != '/') {
            const regex = '.*\\d';
            setLastValue(lastValue +'/');
            setValue('/');
          }
        } else {
          setLastValue(value == 0 ? '/' : value +'/');
          setValue('/');
        }
        break;

      case "X":
        if (lastValue != '') {
          if (value != 'X') {
            setLastValue(lastValue +'X');
            setValue('X');
          }
        } else {
          setLastValue(value == 0 ? 'X' : value +'X');
          setValue('X');
        }
        break;

      case "-":
        if (lastValue != '') {
          if (value != '-') {
            setLastValue(lastValue +'-');
            setValue('-');
          }
        } 
        else {
          setLastValue(value == 0 ? '-' : value +'-');
          setValue('-');
        }
        break;

      case "+":
        if (lastValue != '') {
          if (value != '+') {
            setLastValue(lastValue +'+');
            setValue('+');
          }
        } 
        else {
            setLastValue(value == 0 ? '+' : value +'+');
            setValue('+');
        }
        break;

      case "=":
        const result = evaluate(lastValue);
        setLastValue(lastValue +'=' + result);
        setValue(result);
        break;

      case ".":
        const valArray = value.split('');
        setLastValue(lastValue + (valArray[valArray.length - 1] == '.' ? '' : '.'));
        setValue(value + (valArray[valArray.length - 1] == '.' ? '' : '.'));
        break;

      case "0":
        if (value != 0) {
          setValue(value +'0');
          setLastValue(lastValue +'0')
        }
        break;

      case "1":
        setValue(special.includes(value) ? '1' : value +'1');
        setLastValue(lastValue +'1');
        break;

      case "2":
        setValue(special.includes(value) ? '2' : value +'2');
        setLastValue(lastValue +'2');
        break;

      case "3":
        setValue(special.includes(value) ? '3' : value +'3');
        setLastValue(lastValue +'3');
        break;   

      case "4":
        setValue(special.includes(value) ? '4' : value +'4');
        setLastValue(lastValue +'4');
        break;      

      case "5":
        setValue(special.includes(value) ? '5' : value +'5');
        setLastValue(lastValue +'5');
        break;          

      case "6":
        setValue(special.includes(value) ? '6' : value +'6');
        setLastValue(lastValue +'6');
        break;            

      case "7":
        setValue(special.includes(value) ? '7' : value +'7');
        setLastValue(lastValue +'7');
        break;             

      case "8":
        setValue(special.includes(value) ? '8' : value +'8');
        setLastValue(lastValue +'8');
        break;                 

      case "9":
        setValue(special.includes(value) ? '9' : value +'9');
        setLastValue(lastValue +'9');
        break;

      default: 
      break;
    }
  }


  return (
    <div className="App">
      <div id="calculator">
        <div id="values">
          <h2 id="display">{value}</h2>
          <h4 id="last-value">{lastValue}</h4>
        </div>
        <div className="button" value="AC" id="clear" onClick={click}>AC</div>
        <div className="button" value="/" id="divide" onClick={click}>/</div>
        <div className="button" value="X" id="multiply" onClick={click}>X</div>
        <div className="button" value="-" id="subtract" onClick={click}>-</div>
        <div className="button" value="+" id="add" onClick={click}>+</div>
        <div className="button" value="=" id="equals" onClick={click}>=</div>
        <div className="button" value="." id="decimal" onClick={click}>.</div>
        <div className="button" value="0" id="zero" onClick={click}>0</div>
        <div className="button" value="1" id="one" onClick={() => click('1')}>1</div>
        <div className="button" value="2" id="two" onClick={click}>2</div>
        <div className="button" value="3" id="three" onClick={click}>3</div>
        <div className="button" value="4" id="four" onClick={click}>4</div>
        <div className="button" value="5" id="five" onClick={click}>5</div>
        <div className="button" value="6" id="six" onClick={click}>6</div>
        <div className="button" value="7" id="seven" onClick={click}>7</div>
        <div className="button" value="8" id="eight" onClick={click}>8</div>
        <div className="button" value="9" id="nine" onClick={click}>9</div>
      </div>
    </div>
  );
}

export default App;
