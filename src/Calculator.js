import { useState } from 'react';
import './Calculator.css';
import { create, all } from 'mathjs';

function Calculator() {
   const [screen, setScreen]= useState("")
   const [history, setHistory] = useState([]);
   const handleClick =(value)=>{
        setScreen(screen + value) 
       
   }

  // Create a math.js instance
  const math = create(all);

   const calculateResult=()=>{
        try{
          const result = math.evaluate(screen)
          setScreen(result)
          setHistory((prevHistory) => [...prevHistory, { expression: screen, result }]);
        }catch(error){
          setScreen("Invalid Entry")
        }
   }

   const clear=()=>{
     setScreen("")
   }

   const clearHistory=()=>{
    setHistory([])
   }

  const handleBackspace = () => {
    setScreen((prevScreen) => prevScreen.slice(0, -1));
  };
  

  return (
    <>
    <div className="App">
           <div className='container'>
            
              <p>CASIO</p>

              <input type='text' id='screen' value={screen} />
              <br />

              <button className='button' onClick={()=>handleClick('7')}>7</button>
              <button className='button' onClick={()=>handleClick('8')}>8</button>
              <button className='button' onClick={()=>handleClick('9')}>9</button>
              <button className='button operator' onClick={()=>handleClick('/')}>/</button>

              <br />
              <button className='button' onClick={()=>handleClick('4')}>4</button>
              <button className='button' onClick={()=>handleClick('5')}>5</button>
              <button className='button' onClick={()=>handleClick('6')}>6</button>
              <button className='button operator' onClick={()=>handleClick('*')}>*</button>

              <br />
              <button className='button' onClick={()=>handleClick('1')}>1</button>
              <button className='button' onClick={()=>handleClick('2')}>2</button>
              <button className='button' onClick={()=>handleClick('3')}>3</button>
              <button className='button operator' onClick={()=>handleClick('+')}>+</button>

              <br />
              <button className='button' onClick={()=>handleClick('.')}>.</button>
              <button className='button' onClick={()=>handleClick('0')}>0</button>
              <button className='button' onClick={calculateResult}>=</button>
              <button className='button operator' onClick={()=>handleClick('-')}>-</button>

              <button className='button clear' onClick={clear}>Clear</button>
              <button className='button backspace' onClick={handleBackspace}>Backspace</button>
              
              
           
           </div>

          <div className='historyBox'>
                <h1 className='historytitle'>History</h1>
                    {history.length > 0 && (
                  <div className="history">
                    <button id='clearbuttton' onClick={clearHistory}>clear</button>
                    <ul>
                      {history.map((entry, index) => (
                        <li key={index}>
                          <strong>{entry.expression}</strong> = {entry.result}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
       </div>
    </div>
    </>
  );
}

export default Calculator;
