import React, { useEffect, useState } from 'react'

function LifeCycle() {
    const [count, setCount] = useState(1)
    function Mount(params) {
        console.log("Mount Secessfully");
    }
    function MountUpdate(params) {
        console.log("Mount Update Secessfully");
    }
    function Unmount(params) {
        console.log("Componet UnMount ");
    }

    useEffect(() => { Mount(); }, [])
    useEffect(() => { MountUpdate(); }, [])
    useEffect(() => {
        return () => Unmount();
    }, [])
    return (
        <div>
            <h1>Learn LifeCycle in React</h1>
            <h1> Value:{count}</h1>
            <button onClick={() => setCount(count + 1)}>incorise</button>
        </div>
    )
}

export default LifeCycle
