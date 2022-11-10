import React from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const Reviewcard = ({ handleDelete,review }) => {
  const {  serviceName, message, service_img, _id } = review;
  return (
    <div className="card w-60 bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={service_img} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{serviceName}</h2>
        <div style={{ color: "rgb(240,195,2)" }} className="flex text-xl">
            <FaStar></FaStar>
            <FaStar></FaStar>
            <FaStar></FaStar>
            <FaStar></FaStar>
            <FaStarHalfAlt></FaStarHalfAlt>
          </div>
        <p>{message}</p>
        <div className="card-actions">
          <div className="btn-group">
            <Link to={`/review/${_id}`}><button className="btn btn-active">Edit</button></Link>
            <button onClick={() => handleDelete(_id)} className="btn">
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviewcard;
