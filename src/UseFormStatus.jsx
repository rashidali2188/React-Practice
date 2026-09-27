import React, { useRef } from 'react'
import { useFormStatus } from 'react-dom'

function FormStatus() {
    const btn = useRef();



    async function Handle() {
        btn.current.style.color = "white"
        btn.current.style.backgroundColor = "red"


        alert("Are You Sure! Submit Data")
        await new Promise(res => setTimeout(res, 3000));


        setTimeout(() => {
            btn.current.innerText = "Submit"
            btn.current.style.color = "white"
            btn.current.style.backgroundColor = "yellowgreen"


        }, 3000)

        btn.current.innerText = "Submit Done"
        btn.current.style.color = "white"
        btn.current.style.backgroundColor = "green"







    }

    function MyForm(params) {

        const { pending } = useFormStatus();
        pending ? btn.current.innerText = "Submiting..." : "Submit"

        console.log(pending)
        return (
            <>

                <input type="text" placeholder='enter  your name' />
                <br /><br />
                <input type="number" placeholder='enter  your number' />
                <br /><br />
                <input type="email" placeholder='enter  your email' />
                <br /><br />
                <button ref={btn} style={{ color: "white", backgroundColor: "yellowgreen" }} disabled={pending}>Submit</button>


            </>
        )
    }


    return (
        <div>
            <h1>Learn UseFormStatus in React</h1>
            <form action={Handle}>
                <MyForm />

            </form>


        </div>
    )
}

export default FormStatus
