import { useState } from 'react'
import React from 'react'

function ControlComponent() {
    const [name, setName]= useState("")
    const [number, setNumber] = useState("");
    const [password, setPassword] = useState("");
  return (
    <div>
        <h1>learn Controll Component</h1>
      <input type="name" value={name} onChange={(event) => setName(event.target.value)} placeholder='Enter your name' />
      <br />
      <input type="number" value={number} onChange={(event) => setNumber(event.target.value)} placeholder='Enter your age' />
      <br />
      <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} placeholder='Enter your password' />
<h2>Name: {name}</h2>
<h2>Number: {number}</h2>
<h2>Password: {password}</h2>
<button onClick={()=>{setName(""); setNumber(""); setPassword("");}}>Clear</button>
    </div>
  )
}

export default ControlComponent
