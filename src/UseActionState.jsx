import React, { useActionState } from 'react'

function UseActionState() {
    const formHandler = async (prevdata, currdata) => {
        const name = currdata.get("name")
        const password = currdata.get("password")
        await new Promise(res => setTimeout(res, 2000))
        if (!name) {
            return {
                error: "Empty Value! please enter value"

            }
        };

        if (!password) {
            return {
                error: "Empty Value! please enter value", name, password

            }
        }
        return {
            sucess: " Data Submitted Sucessfully", name, password

        }
        console.log("Run..", name, password)
    }
    const [state, Action, isPending] = useActionState(formHandler, {})
    return (
        <div>
            <h1>Learn UseActionState in React</h1>
            <form action={Action}>
                <label htmlFor="">Name:
                    <input type="text" defaultValue={state?.name} placeholder='Enter name' name='name' />
                </label>
                <br /><br />
                <label htmlFor="">Password:
                    <input type="password" style={{ width: "140px" }} defaultValue={state?.password} placeholder='Enter password' name='password' />
                </label>
                <br /><br />
                <button disabled={isPending}>{isPending ? "Submiting.." : "Submit"}</button>
                {
                    state.error && (
                        <p style={{ color: "red" }}>{state.error}</p>
                    )

                }
                {
                    state.sucess && (
                        <p style={{ color: "green" }}>{state.sucess}</p>
                    )
                }
            </form>
            <hr />
            <h2>Data</h2>
            <h3>Name: {state?.name}</h3>
            <h3>Password: {state?.password}</h3>


        </div>
    )
}

export default UseActionState
