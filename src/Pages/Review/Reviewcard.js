import React from "react";

const Reviewcard = ({ review }) => {
  const { serviceName ,message,service_img} = review;
  return (
    <div className="card w-60 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={service_img} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{serviceName}</h2>
    <p>{message}</p>
    <div className="card-actions">
    <div className="btn-group">
  <button className="btn btn-active">Edit</button>
  <button className="btn">Delete</button>
  
</div>
    </div>
  </div>
</div>
  );
};

export default Reviewcard;
