import './App.css';
import {useState} from "react"

function App() {
  const [count, setCount] = useState(0);
  const [error, setError] = useState(false);


  return (
    <div data-test="component-app">
      <h1 data-test="counter-display">The counter in currently&nbsp; 
        <span data-test="count">{count}</span>
      </h1>

{/* ????????????????????????? */}
      <div data-test="error-message" className={`error ${error ? '' : 'hidden'}`}>
        The counter cannot go below 0
      </div>

      
      <button data-test="increment-button"
      onClick = {()=> {
        if (error) {setError(false);}
        setCount(count+1)}}
      >Increment the counter</button>
     <button data-test="decrement-button"
     onClick = {()=>
      {count > 0 ?
      setCount(count - 1)
      : 
        setError(true)
    }}
    
     > Decrement the counter</button>
    </div>
  );
}

export default App;
