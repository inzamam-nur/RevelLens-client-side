import React, { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { AuthContext } from "../../Context/Authprovider/Authprovider";
import Reviewcard from "./Reviewcard";

const Myreview = () => {
  const { user } = useContext(AuthContext);
  const [reviews, setreview] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/reviews?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setreview(data));
  }, [user?.email]);
  return (
    <div>
      <h2>My review {reviews.length}</h2>

      <div className='lg:grid grid-cols-5 gap-4 mt-5 mb-5 '>
     {reviews.map((review) => (
        <Reviewcard key={review._id} review={review}></Reviewcard>
      ))}
     </div>
    </div>
  );
};

export default Myreview;
