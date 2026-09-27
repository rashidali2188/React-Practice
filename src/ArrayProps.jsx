import React from 'react'

function ArrayProps({ data }) {
  return (
    <div>
      <h1> Array Props pass in component</h1>
      <hr />
      <h2>data = {data.join(",")}</h2>
      <hr />
    </div>
  )
}

export default ArrayProps
