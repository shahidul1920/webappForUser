import { data } from 'autoprefixer';
import { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom'

export const Hero = () => {

    const users = useLoaderData();
    const [usermodf, setUserModf] = useState(users);

    const handleDelete = (user) => {
        const askAlert = window.confirm(`Are you sure that ${user.name} should get fucked?`)

        if (askAlert) {
            fetch(`http://localhost:4000/users/${user._id}`, {
                method: "DELETE",
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data.deletedCount);

                    if (data.deletedCount > 0) {
                        alert(`${user.name} has removed`)
                        const updateUsers = usermodf.filter((usr) => usr._id !== user._id)
                        setUserModf(updateUsers);
                    } else {
                        alert('not done yet, try again')
                    }
                })
        }

    }

    return (
        <div>

            <div className='flex gap-10 flex-wrap'>
                {usermodf?.map((user) => (
                    <div className="card mx-auto bg-base-100 w-96 shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title">
                                {user?.name}
                            </h2>
                            <p>{user.mail}</p>
                            <p>{user.age}</p>
                            <p>{user?._id}</p>
                            <div className="card-actions justify-start">
                                <button onClick={() => handleDelete(user)} className="btn text-white btn-primary">Delete</button>
                                <Link to={`/update-user/${user._id}`}>
                                    <button className="btn btn-outline">Update</button>
                                </Link>                                
                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    )
}
