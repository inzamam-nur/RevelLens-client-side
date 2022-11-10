import React, { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { AuthContext } from "../../Context/Authprovider/Authprovider";
import Reviewcard from "./Reviewcard";

const Myreview = () => {
  const { user } = useContext(AuthContext);
  const [reviews, setreviews] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/reviews?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setreviews(data));
  }, [user?.email]);

//delete review 
  const handleDelete = id =>{
    console.log('clicked')
    const proceed = window.confirm('Are you sure, you want to cancel this order');
    if(proceed){
        fetch(`http://localhost:5000/reviews/${id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if (data.deletedCount > 0){
                alert('deleted successfully');
                const remaining = reviews.filter(rev => rev._id !== id);
                setreviews(remaining);
            }
        })
    }
}
  return (
    <div>
      <h2>My review {reviews.length}</h2>

      <div className='lg:grid grid-cols-5 gap-4 mt-5 mb-5 '>
     {reviews.map((review) => (
        <Reviewcard key={review._id} review={review} handleDelete={handleDelete}></Reviewcard>
      ))}
     </div>
    </div>
  );
};

export default Myreview;
