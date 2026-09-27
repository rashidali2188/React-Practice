import React from 'react'

function NestedLoopLink({newemplo}) {
    return (
        <div>
            {
                newemplo.map((user) => (
                    <div key={user.id}>
                        <h3>Id:{user.id}</h3>
                        <p>Name: {user.name}</p>
                    </div>
                ))
            }
        </div>
    )
}

export default NestedLoopLink
