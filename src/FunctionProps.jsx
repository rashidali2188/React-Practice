import React from 'react'

function FunctionProps({ShowName,name,Password}) {

  return (
    <div>
      <h1>Learn Function Props</h1>
      <button onClick={()=>ShowName(name)}>Show Name</button>
      <button onClick={()=>Password()}>Show Password</button>
    </div>
  )
}

export default FunctionProps;
