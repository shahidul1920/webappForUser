import React from 'react'

export const AddUser = () => {

    const formHandler = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const mail = form.mail.value;
        const age = form.age.value;
        const userDataForm = {
            name,
            mail,
            age
        }
        fetch("http://localhost:4000/users/", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(userDataForm)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    alert(`well done ${name}`)
                    form.reset();
                }
            })

    }

    return (
        <div>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <form onSubmit={formHandler} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input name='mail' type="email" placeholder="email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input name='name' type="text" placeholder="name" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Age</span>
                        </label>
                        <input name='age' type="number" placeholder="Age" className="input input-bordered" />
                    </div>
                    <div className="form-control mt-6">
                        <input type="submit" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        </div>
    )
}
