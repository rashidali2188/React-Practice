import React, { useState } from 'react'

function RadioButton() {
  const [gender, setGender] = useState("Male");
  const [city, setCity] = useState("Islamabad");
  return (
    <div>
      <h1>Learn Ratio Button & Option </h1>
      <h3>Select Gender:</h3>
      <input type="radio" checked={gender == "Male"} onChange={(event) => setGender(event.target.value)} name='Gender' id='Male' value={"Male"} />
      <label htmlFor="Male">Male</label>
      <input type="radio" checked={gender == "Female"} onChange={(event) => setGender(event.target.value)} name='Gender' id='Female' value={"Female"} />
      <label htmlFor="Female">Female</label>
      <h3 style={{ color: "green" }}>Gender: {gender}</h3>
      <br />
      <h3>Select City</h3>
      <select defaultValue={"Islamabad"} onChange={(event)=> setCity(event.target.value)} name="" id="">
        <option value="Islamabad">islamabaad</option>
        <option value="Lahore">Lahore</option>
        <option value="Karachi">Karachi</option>
        <option value="Sidh">Sidh</option>
        <option value="Punjab">Punjab</option>
      </select>
      <h3 style={{ color: "green" }}>Selected City: {city}</h3>

    </div>
  )
}

export default RadioButton
