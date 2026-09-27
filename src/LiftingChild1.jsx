import React from 'react'

function LiftingChild1({setUser}) {
  return (
    <div>
        <h1 style={{color:'green'}}>Child 1</h1>
        <input onChange={(event)=> setUser(event.target.value)} type="text" placeholder='Enter your Name' />
        <hr />
    </div>
    
  )
}

export default LiftingChild1