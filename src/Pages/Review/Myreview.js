import React, { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { AuthContext } from "../../Context/Authprovider/Authprovider";
import Reviewcard from "./Reviewcard";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Myreview = () => {
  const { user,logout} = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch(`https://b6a11-service-review-server-side-inzamam-inzamamnur14-gmailcom.vercel.app/reviews?email=${user?.email}`,
    {
      headers:{
        authorization:`Bearer ${localStorage.getItem('Photography-token')}`
      }
    })
    .then(res => {
      if (res.status === 401 || res.status === 403) {
          return logout();
      }
      return res.json();
  })
  .then(data => {
    setReviews(data);
  })
}, [user?.email, logout])

  //delete review
  const handleDelete = (id) => {
    const proceed = window.confirm(
      "Are you sure, you want to cancel this order"
    );
    if (proceed) {
      fetch(`https://b6a11-service-review-server-side-inzamam-inzamamnur14-gmailcom.vercel.app/reviews/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            // alert("deleted successfully");
            toast("Wow so easy!");
            const remaining = reviews.filter((rev) => rev._id !== id);
            setReviews(remaining);
          }
        });
    }
  };
  return (
    <div>
      <h2>My review {reviews.length}</h2>

      <div className="lg:grid grid-cols-5 gap-4 mt-5 mb-5 ">
        {reviews.map((review) => (
          <Reviewcard
            key={review._id}
            review={review}
            handleDelete={handleDelete}
          ></Reviewcard>
        ))}
        <ToastContainer />
      </div>
    </div>
  );
};

export default Myreview;
