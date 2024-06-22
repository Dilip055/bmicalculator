import React, { useMemo } from 'react'
import { useState } from'react'
import './App.css';

function App() {
  const [height, setHeight] = useState(70);
  const [weight, setWeight] = useState(180);

function onWeightChange(event) {
      setWeight(Number(event.target.value));
}
function onHeightChange(event) {
      setHeight(Number(event.target.value));
}
const output = useMemo(() => {
  const calculateHeight = height /100;
  return (weight/(calculateHeight ** 2)).toFixed(1)  ;
},[weight, height]);
    
  return (
    <main>
    <div className='main-section'>
      <h1>BMI CALCULATOR</h1>
    <div className='input-section'>
      <p className='slider-input'>Weight: {weight} kg </p>
      <input type='range' min='40' max='200'  step='1' className='input-slider' id='weight'  onChange={onWeightChange}/>
      <p className='slider-output'>Height: {height} cm</p>
      <input type='range' min='140' max='220' className='input-slider' id='height' onChange={onHeightChange} />
    </div>
    <div className='output-section'>
      <p>Your BMI is:</p>
      <p className='output'>{output}</p>
    </div>
    </div>
    </main>
  )
}

export default App