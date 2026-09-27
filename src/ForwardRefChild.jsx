import React from 'react'

function ForwardRefChild(props) {
  return (
    <div>
      <input type="text"ref={props.year} />
      
    </div>
  )
}

export default ForwardRefChild;
