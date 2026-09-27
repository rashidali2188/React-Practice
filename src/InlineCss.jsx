import React, { useState } from 'react'

function InlineCss() {
  const [display1, setDisplay1] = useState(true)
  const [style1, setStyle1] = useState(
    {
      width: "200px",
      backgroundColor: "gray",
      color: "green",
      margin: "12px",
      border: "3px solid black",
      borderRadius: "5px",
      boxShadow: "5px 5px 5px 0px gray"

    })
  function changeTheme(bcolor, ccolor, bord) {
    setStyle1({ ...style1, background: bcolor, color: ccolor, borderColor: bord })
  }

  return (
    <>
      <h1>Learn Inline Css in React</h1>
      <button onClick={() => changeTheme("blue", "white", "yellow")}>Change Theme</button>
      <button onClick={() => changeTheme("white", "black", "green")}>default Theme</button>
      <button onClick={() => setDisplay1(!display1)}>grid on/off</button>

      < div style={{ display: display1 ? "flex" : "block" }}>

        <div style={style1}>
          <img style={{ borderTopLeftRadius: "5px", borderTopRightRadius: "5px" }} width="200px" src="img.jpg" alt="" />
          <div style={{ textAlign: "center" }}>
            <h3>Rashid Ali</h3>
            <h4>Web developer</h4>
          </div>

        </div>
        <div style={style1}>
          <img style={{ borderTopLeftRadius: "5px", borderTopRightRadius: "5px" }} width="200px" src="img.jpg" alt="" />
          <div style={{ textAlign: "center" }}>
            <h3>Rashid Ali</h3>
            <h4>Web developer</h4>
          </div>

        </div>
        <div style={style1}>
          <img style={{ borderTopLeftRadius: "5px", borderTopRightRadius: "5px" }} width="200px" src="img.jpg" alt="" />
          <div style={{ textAlign: "center" }}>
            <h3>Rashid Ali</h3>
            <h4>Web developer</h4>
          </div>

        </div>
      
      </div>

    </>


  )
}

export default InlineCss;