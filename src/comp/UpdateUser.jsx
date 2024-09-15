import React, { useState } from 'react'
import { json, useLoaderData } from 'react-router-dom';

export const UpdateUser = () => {
    const currentUser = useLoaderData()
    const [mainUser, setMainUser] = useState(currentUser)
    const {age, mail, name} = currentUser;
    
    const handleChange = (e)=>{
        const typeField = e.target.name;
        const fieldValue = e.target.value;
        const newUser = {...mainUser};
        newUser[typeField] = fieldValue;      
        setMainUser(newUser)     
    }
    const userUpd =(e)=>{
        e.preventDefault();
        fetch(`http://localhost:4000/users/${mainUser._id}`,{
            method:"PUT",
            headers:{
                'content-type' : 'application/json',
            },
            body: JSON.stringify(mainUser)
        })
        .then(res => res.json())
        .then(data =>{
            if(data.matchedCount > 0){
                alert('Update successful')
            }else{
                alert('try again later')
            }            
        })
        
    }
    console.log(mainUser);
    
    return (
        <div>
            <div className="card mx-auto bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <form onSubmit={userUpd} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input onChange={handleChange} defaultValue={mail} name='mail' type="email" placeholder="email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input onChange={handleChange} name='password' defaultValue={mainUser?.password} type="password" placeholder="Password" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input onChange={handleChange} defaultValue={name} name='name' type="text" placeholder="name" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Age</span>
                        </label>
                        <input onChange={handleChange} defaultValue={age} name='age' type="number" placeholder="Age" className="input input-bordered" />
                    </div>
                    <div className="form-control mt-6">
                        <input type="submit" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        </div>
    )
}
