import React, { useState } from 'react'

function ObjectState() {
    const [user, setUser] = useState({
        name: "Rashid Ali",
        age: 25,
        address: {
            city: "Narowall"
        }
    })
    function ChangeAge(params) {
        setUser({
            ...user,
            age: 24
        })
    }
    function ChangeName(changeN) {
        user.name = changeN
        setUser({
            ...user
        })
    }
    function ChangeCity(city) {
        user.address.city = city
        setUser({ ...user, address: { ...user.address, city } })
        console.log(user)
    }

    return (
        <div>
            <h1>Object State in React</h1>
            <input type="text" placeholder='enter name' onChange={(event) => ChangeName(event.target.value)} />
            <br /><br />
            <input type="text" placeholder='enter name' onChange={(event) => ChangeCity(event.target.value)} />
            <h3>Name:{user.name}</h3>
            <h3>Age:{user.age}</h3>
            <h3>City:{user.address.city}</h3>
            <button onClick={ChangeAge}> Change Age</button>
        </div>
    )
}

export default ObjectState
