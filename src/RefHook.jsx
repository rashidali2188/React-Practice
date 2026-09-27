import React, { useRef } from 'react'

function RefHook() {
    const InputName = useRef();
    function inputChange() {

        InputName.current.placeholder = "enter Type"
        InputName.current.style.color = "red"
        InputName.current.focus();

    }
    function HideShow() {
        
        if (InputName.current.style.display = "none") {
            InputName.current.style.display = "inline"


        }
    }
    return (
        <div>
            <h1>Learn Ref Hook in React</h1>
            <h1>Ref Hook</h1>
            <input ref={InputName} type="text" />
            <button onClick={() => inputChange()}>input</button>
            <button onClick={() => HideShow()}>Hide/Show</button>

        </div>
    )
}

export default RefHook;
