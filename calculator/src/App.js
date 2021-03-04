import './App.css';
import { useState } from 'react'
import { evaluate } from 'mathjs'

export default function App() {
  const [value, setValue] = useState('0');
  const [lastValue, setLastValue] = useState('');

  
  const click = (event) => {
    const e = document.getElementById(event.target.id).getAttribute('value');
    const special = ['/', '-', '+', '*', '0'];
   // const operators = ['/', '-', '+', '*'];

    switch(e) {

      case "AC":  
        setValue('0');
        setLastValue('');
        break;

      case "/":
        if (lastValue != '') {
      
          //removes excess operators from the equation
          const match = lastValue.match('.*\\d');
          setLastValue(match[0] +'/');
          setValue('/');
          
        } else {
          setLastValue(value == 0 ? '/' : value +'/');
          setValue('/');
        }
        break;

      case "X":
        if (lastValue != '') {
          //removes excess operators from the equation
          const match = lastValue.match('.*\\d');
          setLastValue(match[0] +'*');
          setValue('*');
         
        } else {
          setLastValue(value == 0 ? '*' : value +'*');
          setValue('*');
        }
        break;

      case "-":
        if (lastValue != '') {
          if (value != '-') {
            setLastValue(lastValue +'-');
            setValue('-');
          }
        } else {
          setLastValue(value == 0 ? '-' : value +'-');
          setValue('-');
        }
        break;

      case "+":
        if (lastValue != '') {
          
          //removes excess operators from the equation
          const match = lastValue.match('.*\\d');
          setLastValue(match[0] +'+');
          setValue('+');
        } else {
          setLastValue(value == 0 ? '+' : value +'+');
          setValue('+');
        }
        break;

      case "=":
        const result = evaluate(lastValue + value);
        setLastValue(result.toString());
        setValue(result);
        break;

      case ".":
        setValue(value + (value.includes('.') ? '' : '.'));
        break;

      case "0":
        setValue(special.includes(value) ? '0' : value + '0');
        break;

      case "1":
        setValue(special.includes(value) ? '1' : value +'1');
        break;

      case "2":
        setValue(special.includes(value) ? '2' : value +'2');
        break;

      case "3":
        setValue(special.includes(value) ? '3' : value +'3');
        break;   

      case "4":
        setValue(special.includes(value) ? '4' : value +'4');
        break;      

      case "5":
        setValue(special.includes(value) ? '5' : value +'5');
        break;          

      case "6":
        setValue(special.includes(value) ? '6' : value +'6');
        break;            

      case "7":
        setValue(special.includes(value) ? '7' : value +'7');
        break;             

      case "8":
        setValue(special.includes(value) ? '8' : value +'8');
        break;                 

      case "9":
        setValue(special.includes(value) ? '9' : value +'9');
        break;

      default: 
      break;
    }
  }


  return (
    <div className="App">
      <div id="calculator">
        <div id="display-container">
          <h1 id="display">{value}</h1>
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