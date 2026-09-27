import { useState } from "react";

function Usestate() {
    const [display, setDisplay] = useState(true)
    return (
        <>
            <h1>hello Usestate</h1>
            <button onClick={() => setDisplay(!display)}>click me</button>
            {
                // display? <h1>Rashid ali</h1> : null
                display? <Usestcomp/> : null
            }
            
        </>

    )
}

function Usestcomp(){
    return(
        <h1> Component in Usestate.</h1>
    )
}


export default Usestate;
