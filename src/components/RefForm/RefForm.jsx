import { useEffect, useRef } from "react";


const RefForm = () => {

    const nameRef = useRef(null)
    const emailRef = useRef(null)
    const contactRef = useRef(null)

    useEffect ( () => {
        nameRef.current.focus()
    }, [])

    const handleSubmit = e => {
        e.preventDefault()
        console.log(nameRef.current.value, emailRef.current.value, contactRef.current.value);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input ref={nameRef} className="py-2 px-3 bg-slate-200 rounded-md mb-5" type="text" name="name"/>
                <br />
                <input ref={emailRef} defaultValue={'example@mail.com'} className="py-2 px-3 bg-slate-200 rounded-md mb-5" type="email" name="email"/>
                <br />
                <input ref={contactRef} className="py-2 px-3 bg-slate-200 rounded-md mb-5" type="number" name="contact"/>
                <br />
                <input className="px-2 py-1 font-semibold text-base bg-green-400 to-white rounded-md" type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default RefForm;