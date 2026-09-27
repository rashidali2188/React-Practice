import React from 'react'
import NestedLoopLink from './NestedLoopLink'

function NestedLoop() {
    const emplo = [
        {
            id: '1',
            name: "Rashid Ali",
            age: '23',
            salary: '33000',
            newemp: []
        },
        {
            id: '2',
            name: "Ahmed Khan",
            age: '25',
            salary: '34000',
            newemp: [
                {
                    id: '2',
                    name: "Ahmed Khan",
                    age: '25',
                    salary: '34000',
                },
                {
                    id: '2',
                    name: "Ahmed Khan",
                    age: '25',
                    salary: '34000',
                }
            ]
        },
    ]

    return (
        <div>
            <h1>Learn Nested Loop</h1>
            {emplo.map((user) => (
                <div
                    style={{
                        backgroundColor: "wheat",
                        border: "1px solid black",
                        borderRadius: "10px",
                        padding: "10px",
                        marginBottom: "10px"
                    }}
                    key={user.id}
                >
                    <h3 style={{ color: "red" }}>Id: {user.id}</h3>
                    <h3>Name: <span style={{ color: "green" }}>{user.name}</span></h3>
                    <h3>Salary: <span style={{ color: "blue" }}>{user.salary}</span></h3>

                     <NestedLoopLink newemplo={user.newemp}></NestedLoopLink>    
                       
                </div>

            ))}
                         
        </div>
    )
}

export default NestedLoop
