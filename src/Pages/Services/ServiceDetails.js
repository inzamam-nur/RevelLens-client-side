import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import Review from "../Review/Review";
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const ServiceDetails = () => {
    const service=useLoaderData()

  return <div>
    <div className="card card-compact mt-10 mb-10  bg-base-100 shadow-xl">
        
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
            <div>Rating : {service.rating.number}</div>
            <div>Badge : {service.rating.badge}</div>
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
      </div>
      <Review ></Review>
  </div>;
};

export default ServiceDetails;
