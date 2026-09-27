import React, { useEffect, useState } from 'react'
function UseEffect() {
    const [count, setCount] = useState(1);
    const [count2, setCount2] = useState(5);

    function func() {
        console.log("hello UseEffect")
    }
    useEffect(() => {
        func();
    },[]);

    return (
        <div>
            <h1>Learn UseEffect in React</h1>
            <h2>Count :{count}</h2>
            <h2>Count2 :{count2}</h2>
            <button onClick={() => setCount(count + 1)}>value +</button>
            <button onClick={() => setCount2(count2 + 5)}>value2 +</button>
        </div>
    )
}

export default UseEffect;
