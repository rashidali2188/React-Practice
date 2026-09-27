import React, { useState } from 'react'

function CheckBox() {
    const [hobby, setHoby] = useState([])

    const hobbies = (event) => {
        console.log(event.target.value, event.target.checked);
        if (event.target.checked) {
            setHoby([...hobby, event.target.value]);
        } else {
            setHoby([...hobby.filter((item)=> item != event.target.value )])
        }
    }
    return (

        <div>
            <h1>Learn Checkbox data </h1>
            <h2>Select Your Hobbies</h2>
            <input type="checkbox" id='Cooking' value="Cooking" onChange={hobbies} />
            <label htmlFor='Cooking'>Cooking</label>
            <br />
            <input type="checkbox" id='Dance' value="Dance" onChange={hobbies} />
            <label htmlFor='Dance'>Dance</label>
            <br />

            <input type="checkbox" id='Music' value="Music" onChange={hobbies} />
            <label htmlFor='Music'>Music</label>
            <br />

            <input type="checkbox" id='Treveling' value="Treveling" onChange={hobbies} />
            <label htmlFor='Treveling'>Treveling</label>
            <h2>{hobby.join(".")}</h2>

        </div>
    )
}

export default CheckBox;

