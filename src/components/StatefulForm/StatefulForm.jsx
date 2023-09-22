import { useState } from "react";


const StatefulForm = () => {
    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null);
    const [err, setErr] = useState('')

    const handleSubmit = e => {
        e.preventDefault()
        if (password.length < 8) {
            setErr('Password must be 8 character or long.')
        }
        else {
            setErr('')
        console.log(email, password);
        }
    }

    const handleChange = e => {
        console.log(e.target.value);
        setEmail(e.target.value)
    }

    const handlePassCng = e => {
        console.log(e.target.value);
        setPassword(e.target.value)
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input className="py-2 px-3 bg-slate-200 rounded-md mb-5" type="text" name="name"/>
                <br />
                <input onChange={handleChange} className="py-2 px-3 bg-slate-200 rounded-md mb-5" type="email" name="email"/>
                <br />
                <input className="py-2 px-3 bg-slate-200 rounded-md mb-5" type="number" name="contact"/>
                <br />
                <input onChange={handlePassCng} className="py-2 px-3 bg-slate-200 rounded-md mb-5" type="password" name="password"/>
                <br />
                <input className="px-2 py-1 font-semibold text-base bg-green-400 to-white rounded-md" type="submit" value="Submit" />
            </form>
            {
                err && <p>{err}</p>
            }
        </div>
    );
};

export default StatefulForm;