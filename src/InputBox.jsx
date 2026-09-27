import React, { useState } from 'react'

function InputBox() {
    const [val ,setVal]=useState("")
  return (
    <div>
      <h1>learn input Box in react </h1>
      <input type="Email" value={val} onChange={(event)=>setVal(event.target.value)} placeholder='Enter Your Email'/>
     <h3>{val}@gmail.com</h3>
     <button onClick={()=>setVal("")}>Clear</button>
    </div>
  )
}

export default InputBox
