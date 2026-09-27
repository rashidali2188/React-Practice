import React, { useState } from 'react'
import LiftingChild1 from './LiftingChild1'
import LiftingChild2 from './LiftingChild2'

function LiftingState() {
 const [user,setUser]=useState()
    return (
    <div>
        <h1>Learn Lifting in react</h1>
        {/* <h3>{user}</h3> */}

        <LiftingChild1 setUser={setUser}/>
        <LiftingChild2 user={user}/>
    </div>
  )
}

export default LiftingState