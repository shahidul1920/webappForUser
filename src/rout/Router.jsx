import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Main } from "../layout/Main";
import { Hero } from "../comp/Hero";
import { AddUser } from "../comp/AddUser";
import { UpdateUser } from "../comp/UpdateUser";


export const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
            path:'/',
            element:<Hero />,
            loader: async ()=> await fetch("http://localhost:4000/users/"),
        },
        {
            path:'/add',
            element:<AddUser />
        },
        {
            path:'/update-user/:id',
            element:<UpdateUser />,
            loader: async ({params})=> await fetch(`http://localhost:4000/users/${params.id}`),
        },
    ]
    }
]);

// function App(){
//     return(
//         <>
//             <RouterProvider router={router} />
//         </>
//     )
// }