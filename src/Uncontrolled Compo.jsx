import React, { useRef } from 'react'
         //(Use queryselector)

// function UncontrolledCompo() {
//     function fromHandler(params) {
//         params.preventDefault();
//         const name= document.querySelector("#nam");
//         const number= document.querySelector("#num");
//         console.log("Name", name.value);
//         console.log( "Number",number.value);
//     }
//   return (
//     <div>
//       <h1>Learn Uncontroled Copmonents</h1>
//       <form onSubmit={fromHandler} action="">
//         <input type="text" id='nam' placeholder='Enter Your Name' />
//         <br /><br />
//         <input type="password" id='num' placeholder='Enter your Number' />
//         <br /><br />
//       <button>Submit</button>

//       </form>
    
//     </div>
//   )
// }
               //( Use useRer)

function UncontrolledCompo() {
    const name = useRef();
    const number = useRef();
    function fromHandler(params) {
        params.preventDefault();
        const val = name.current.value
        const val2 = number.current.value
      console.log("Name :",val,"Number :",val2)
    }
  return (
    <div>
      <h1>Learn Uncontroled Copmonents</h1>
      <form onSubmit={fromHandler} action="">
        <input type="text" ref={name} placeholder='Enter Your Name' />
        <br /><br />
        <input type="password" ref={number} placeholder='Enter your Number' />
        <br /><br />
      <button>Submit</button>

      </form>
    
    </div>
  )
}

export default UncontrolledCompo;
