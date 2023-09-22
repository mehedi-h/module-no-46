

const SimpleForm = () => {

    const handleSubmit = e => {
        e.preventDefault();
        console.log(e.target.name.value);
        console.log(e.target.email.value);
        console.log(e.target.contact.value);
        console.log('form submited successfully');
    }

    return (
        <div className="text-center">
            <form onSubmit={handleSubmit}>
                <input className="py-2 px-3 bg-slate-200 rounded-md mb-5" type="text" name="name"/>
                <br />
                <input className="py-2 px-3 bg-slate-200 rounded-md mb-5" type="email" name="email"/>
                <br />
                <input className="py-2 px-3 bg-slate-200 rounded-md mb-5" type="number" name="contact"/>
                <br />
                <input className="px-2 py-1 font-semibold text-base bg-green-400 to-white rounded-md" type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default SimpleForm;