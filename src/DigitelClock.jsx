import React, { useEffect, useState } from 'react'

function DigitelClock() {
    const [tcolor, setTColor] = useState("red")
    const [bcolor, setBColor] = useState("green")
    const [time, setTime] = useState(new Date())

    useEffect(() => {
        const setIntervalId = setInterval(() => {
            setTime(new Date())

        }, 1000);
        return () => clearInterval(setIntervalId);

    }, [])


    return (
        <div>
     
            
            <h1 style={{ color: "red" }}>Digitel Clock</h1>
            <label>Select Time Color</label>
            <select onChange={(event) => setTColor(event.target.value)}>
                <option value="red">red</option>
                <option value="yellow">yellow</option>
                <option value="green">green</option>
                <option value="blue">blue</option>
            </select>
            <br /><br />
            
            <label>Select Block Color</label>

            <select onChange={(event) => setBColor(event.target.value)}>
                <option value="green">green</option>
                <option value="yellow">yellow</option>
                <option value="red">red</option>
                <option value="blue">blue</option>
            </select>
            <br />
            <div style={{ display: "flex", justifyContent: "center", marginTop: "15px" }}>
                <h1 style={{
                    color: tcolor,
                    backgroundColor: bcolor,
                    width: "200px",
                    padding: "10px",
                    margin: "0 auto",
                    textAlign: "center"
                }}>{time.toLocaleTimeString()}</h1>
            </div>

        </div >
    )
}

export default DigitelClock
