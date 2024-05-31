import { useState } from 'react';
import './App.css';

export default function App() {
  return (
    
    <div>
     <Counter/>
    </div>
  );
}
function Counter(){
  const [count,setCount] = useState(0);
  const [step, setStep] = useState(1);
  const date = new Date('May 31 2024');
  date.setDate(date.getDate()+count);
  return (
  <div>
    <div>

    <div>
      <button onClick={()=>setStep(c=>c-1)}>-</button>
      <span>Step: {step} </span>
      <button onClick={()=>setStep(c=>c+1)}>+</button>
      </div>

      <button onClick={()=>setCount(c=>c-step)}>-</button>
      <span>Count: {count} </span>
      <button onClick={()=>setCount(c=>c+step)}>+</button>
      </div>

      


       <span>{count===0 ? "Today is" : count > 0 ? `${count} days from Today` : `${Math.abs(count)} days ago was`}</span>
      <span><p>{date.toDateString()}</p></span>
  </div>
);
}


