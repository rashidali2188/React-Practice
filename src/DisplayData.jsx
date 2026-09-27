import React, { useEffect } from 'react'

function DisplayData({black,red}) {
    function forBlack() {
        console.log("black count",black)
    }
     function forRed() {
        console.log("red count",red)
    }
    useEffect(()=>{
    forBlack();

    },[])
    useEffect(()=>{
    forRed()

    },[])
  return (
    <div>
      <h2>Hi </h2>
    </div>
  )
}

export default DisplayData;
