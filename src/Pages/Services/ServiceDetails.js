import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import Review from "../Review/Review";
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { useEffect } from "react";
import { useState } from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";


const ServiceDetails = () => {
    const service=useLoaderData()
    const [reviews,setReviews] = useState([])
    const [reload,setReload]=useState([]);

useEffect(()=>{
  fetch(`https://b6a11-service-review-server-side-inzamam-nur.vercel.app/reviews/${service._id}`)
  .then(res=>res.json())
  .then(data=>{
    setReviews(data)
    
  })
},[reload])
// console.log(reviews)
  return <div>
    
    <div className="card card-compact mt-10 mb-10  bg-base-100 shadow-xl">
        <div>
        </div>
        <PhotoProvider>
      <PhotoView src={service.image_url}>
        <img src={service.image_url} alt="" />
      </PhotoView>
    </PhotoProvider>
        <div className="card-body">
          <h2 className="card-title">{service.title}</h2>
          <p>
              <p>{service.details}</p>
          </p>
          <div className="grid grid-cols-6 gap-4">
          <div className="col-start-1 col-end-3 ">
            <div>Rating : {service.rating?.number}</div>
            <div>Badge : {service.rating?.badge}</div>
          </div>
          <div className="col-end-7 col-span-2 ">
            <div>Provided : {service.total_service_provided}</div>
            <div>Price : ${service.price}</div>
          </div>
          </div>
          <div className="card-actions justify-end mt-5">
          <Link to= {'/services'}><button  className="btn btn-outline ">Services</button></Link>
          <Link to= {'/'}><button  className="btn btn-outline ">GO Home</button></Link>
          </div>
        </div>

        {
      reviews?.map((review)=>{
        return <div className=" ">
                  <div className="lg:grid grid-cols-3 gap-4 mt-5 mb-5">
                {
                  review?._id ?
                  <>
                    <div className=" card-body items-center text-center">
          <h2 className="card-title"></h2>
          <div style={{ color: "rgb(240,195,2)" }} className="flex text-3xl">
            <FaStar></FaStar>
            <FaStar></FaStar>
            <FaStar></FaStar>
            <FaStar></FaStar>
            <FaStarHalfAlt></FaStarHalfAlt>
          </div>
          <h2>{review.serviceName}</h2>
          <img style={{height:'40px'}} className="rounded-full " src={review.img} alt="" />
          <h2>Reviewer: {review.customer}</h2>
          <p>{review.message}</p>
        </div>
                  </>
                  :
                  <>
                  <div style={{height:'400px'}} classNAme='text-center'>No Review Added</div>
                  </>
                }
                  </div>
        </div>
      })
    }
      </div>


      
      <Review setReload={setReload} ></Review>
  </div>;
};

export default ServiceDetails;
