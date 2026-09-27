import React, { useTransition } from 'react'

function UseTranstion() {
    const [ispendig, startTranstion] = useTransition();

     function HandleUI(params) {
        startTranstion(async() => {
            await new Promise(res => setTimeout(res, 10000));
          
        })

    }
    return (
        <div>
            <h1>Learn UseTranstion in React</h1>
            {
                ispendig?
            <img src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExM3ZoOHBtYXBqaTZzdzVpb3RsYnR1dHB6OGVtd242NjRqem9tejI0diZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/11ASZtb7vdJagM/giphy.gif" style={{ width: '100px', height: '100px' }} alt="" />:null

            }
            <br /><br />
            <button disabled={ispendig} onClick={HandleUI}>{ispendig ? "loading..." : "Submit"}</button>
        </div>
    )
}

export default UseTranstion;
