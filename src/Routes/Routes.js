import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import AddService from "../Pages/AddService/AddService";
import Blog from "../Pages/Blog/Blog";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import ServiceDetails from "../Pages/Services/ServiceDetails";
import Services from "../Pages/Services/Services";
import SignUp from "../Pages/SignUp/SignUp";
import Myreview from '../Pages/Review/Myreview'

export const routes=createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
             {
                path:'/',
                element:<Home></Home>,
                loader:()=>fetch('http://localhost:5000/serviceslimit')
             },
             {
                path:'/login',
                element:<Login></Login>
             },
             {
                path:'/signup',
                element:<SignUp></SignUp>
             },
             {
                path:'/blog',
                element:<Blog></Blog>
             },
             {
                path:'/services',
                element:<Services></Services>,
                loader:()=>fetch('http://localhost:5000/services')

             },
             {
                path:'/services/:id',
                element:<ServiceDetails></ServiceDetails>,
                loader:({params})=>fetch(`http://localhost:5000/services/${params.id}`)


             },
             {
               path:'/services',
               element:<Services></Services>,
               loader:()=>fetch('http://localhost:5000/services')

            },
             {
               path:'/addservice',
               element:<AddService></AddService>
            
            },
             {
               path:'/myreview',
               element:<Myreview></Myreview>
            
            }
        ]
    }
])