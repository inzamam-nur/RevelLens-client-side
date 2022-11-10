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
import PrivateRoute from "./PrivateRoutes";
import UpdateReview from "../Pages/Review/UpdateReview";

export const routes=createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
             {
                path:'/',
                element:<Home></Home>,
                loader:()=>fetch('https://b6a11-service-review-server-side-inzamam-nur.vercel.app/serviceslimit')
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
                loader:()=>fetch('https://b6a11-service-review-server-side-inzamam-nur.vercel.app/services')

             },
             {
                path:'/services/:id',
                element:<PrivateRoute><ServiceDetails></ServiceDetails></PrivateRoute>,
                loader:({params})=>fetch(`https://b6a11-service-review-server-side-inzamam-nur.vercel.app/services/${params.id}`)


             },
             {
               path:'/services',
               element:<Services></Services>,
               loader:()=>fetch('https://b6a11-service-review-server-side-inzamam-nur.vercel.app/services')

            },
             {
               path:'/addservice',
               element:<AddService></AddService>
            
            },
             {
               path:'/myreview',
               element:<Myreview></Myreview>
            
            },
             {
               path:'/review/:id',
               element:<UpdateReview></UpdateReview>,
               loader:({params})=>fetch(`https://b6a11-service-review-server-side-inzamam-inzamamnur14-gmailcom.vercel.app/review/${params.id}`)

            
            }
        ]
    }
])