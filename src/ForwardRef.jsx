import React, { useRef } from 'react'
import ForwardRefChild from './ForwardRefChild';

function ForwardRef() {
    const year = useRef()
    function Year(){
       year.current.focus();
       year.current.value="2025"
       year.current.style.color="red"
       year.current.style.backgroundColor= "yellow"
    }
  return (
    <div>
      <h1>Learn forward Ref</h1>
      <ForwardRefChild year={year}/>
      <br /><br />
      <button onClick={Year}>Click</button>
    </div>
  )
}

export default ForwardRef
