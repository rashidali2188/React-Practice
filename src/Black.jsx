import React, { useState } from 'react'
import DisplayData from './DisplayData'

function Black() {
    const [black, setBlack] = useState(1)
    const [red, setRed] = useState(1)
  return (
    <div>
        <DisplayData black={black} red={red}></DisplayData>
      <h1>Learn useeffect props</h1>
      <h1>black {black}</h1>
      <h1 style={{color:"red"}}>red {red}</h1>
      <button onClick={()=> setBlack(black+1)}>incress black</button>
      <button onClick={()=> setRed(red+1)}>incress red</button>
    </div>
  )
}

export default Black
