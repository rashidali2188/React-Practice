import React, { useId } from 'react'

function UseIdHook() {
    const id = useId()
    return (
        <div>
            <h1>Learn UseId Hook In React</h1>
            <form action="">
                <label htmlFor={id + "name"}>Enter Name</label>
                <input type="text" name={id + "name"} />
                <br /> <br />
                <label htmlFor={id + "Age"}>Enter Age</label>
                <input type="number" name={id + "Age"} />
                <br /> <br />
                <label htmlFor={id + "box"}>Tick Box</label>
                <input type="checkbox" name={id + "box"} />

            </form>

        </div>
    )
}

export default UseIdHook
