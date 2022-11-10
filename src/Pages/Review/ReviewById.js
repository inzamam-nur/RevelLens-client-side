import React from 'react';
import { FaStar, FaStarHalfAlt } from "react-icons/fa";


const ReviewById = () => {
    return (
        <div>
                <div className="card-body items-center text-center">
          <h2 className="card-title">Cookies!</h2>
          <div style={{ color: "rgb(240,195,2)" }} className="flex text-3xl">
            <FaStar></FaStar>
            <FaStar></FaStar>
            <FaStar></FaStar>
            <FaStar></FaStar>
            <FaStarHalfAlt></FaStarHalfAlt>
          </div>
          <p>We are using cookies for no reason.</p>
        </div>
        </div>
    );
};

export default ReviewById;