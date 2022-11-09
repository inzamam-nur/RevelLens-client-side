import React from "react";
import { Link } from "react-router-dom";

const ServiceCard = ({service}) => {
  const { _id,title ,image_url,details,rating,total_service_provided,price} = service;
  return (
    <div className="">
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={image_url} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>
            {" "}
            {details?.length > 100 ? (
              <>
                {details.slice(0, 100) + "..."}
                  <Link className="text-indigo-700">Read More...</Link>
                
              </>
            ) : (
              <p>{details}</p>
            )}
          </p>
          <div className="grid grid-cols-6 gap-4">
          <div className="col-start-1 col-end-3 ">
            <div>Rating : {rating.number}</div>
            <div>Badge : {rating.badge}</div>
          </div>
          <div className="col-end-7 col-span-2 ">
            <div>Provided : {total_service_provided}</div>
            <div>Price : ${price}</div>
          </div>
          </div>
          <div className="card-actions justify-end mt-5">
          <Link to= {`/services/${_id}`}><button  className=" btn btn-outline ">Details</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
