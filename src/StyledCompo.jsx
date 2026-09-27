import React from 'react'
import styled from 'styled-components';

function StyledCompo() {
          //with  back tik
    // const Myheadig= styled.h1 `
    // color:red;
    // background-color:black;
    // border:5px solid green;
    // border-radius:5px;
    // width:500px;
    // `;
           // with object
    // const Myheading2= styled.h1({
    //     color:"maroon",
    //     backgroundColor:"yellow",
    //     border:"5px solid black",
    //     borderRadius:"10px"
    // })  
    
    const MyBtn= styled.button`
    color:red;
    background-color:blue;
    border:1px solid black;
    border-radius:10px;
    box-shadow:5px 5px 5px grey;

    `
  return (
    <div>
      <h1 style={{color:"maroon"}}>Learn Styled Components</h1>
      {/* <Myheadig>My heading</Myheadig> */}
      {/* <Myheading2>My heading 2</Myheading2> */}
      <MyBtn>Click</MyBtn>
      <br /><br />
      <MyBtn>Download</MyBtn>
      <br /><br />
      <MyBtn>Learn more</MyBtn>


    </div>
  )
}

export default StyledCompo;
