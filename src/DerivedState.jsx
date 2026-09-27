import React, { useState } from 'react'

function DerivedState() {
  const [group, setGroup] = useState([])
  const [user, setUser] = useState("")
  function groupInput(params) {
    setGroup([...group, user])
  }
  const total = group.length;
  const uni=[...new Set(group)].length
  const lstEn = group[group.length-1]
  console.log(group)
  return (
    <div>
      <h1>Learn Dervied State in React</h1>
      <h2 style={{color:"green"}}>total: {total}</h2>
      <h2 style={{color:"green"}}>unique: {uni}</h2>
      <h2 style={{color:"green"}}>Last word: {lstEn}</h2>
      <input onChange={(event) => setUser(event.target.value)} type="text" placeholder='Enter any value' />

      <button onClick={groupInput}>Enter Value</button>
      {
        group.map((item, index) => (
          <h3 key={index}>{item}</h3>

        ))
      }
    </div>
  )
}

export default DerivedState
