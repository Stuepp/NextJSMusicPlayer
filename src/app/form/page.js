'use client'

//import { experimental_useFormState as useFormState } from 'react-dom'
//import { experimental_useFormStatus as useFormStatus } from 'react-dom'
//import { createTodo } from '@/app/action'
import NavBar from "../components/NavBar"

const initialState = {
    message: null,
}

function SubmitButton(){
    //const { pending } = useFormStatus()
    //aria-disabled={pending}
    return (
        <button type='submit'  className="bg-slate-100 text-black rounded-lg w-16 m-4 text-center font-bold" accept='audio/'>Add</button>
    )
}

function Formulario(){
    //const [state, formAction] = useFormState(createTodo, initialState)
    // <form action={formAction}
    return (
        <main>
            <NavBar />
            <form  className="flex flex-col m-10 items-center bg-slate-700 rounded-lg">
                <label htmlFor='todo' className="flex flex-col m-4">
                    Song name:
                    <input type='text' name='name' className="my-2 rounded-lg text-black outline outline-0 focus:border-2 focus:border-sky-300" required />
                </label>
                <label htmlFor='todo' className="flex flex-col m-4">
                    Song:
                    <input type='file' name='file'  accept='audio/' className="my-2" required />
                </label>
                <SubmitButton />
            </form>
        </main>
    )
}

export default Formulario