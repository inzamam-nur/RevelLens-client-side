import { useContext } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Context/Authprovider/Authprovider";
import ReviewById from "./ReviewById";
const Review = () => {
  const { _id, title, price,image_url} = useLoaderData();
  const { user } = useContext(AuthContext);
  const handleReview = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = user?.email || "unregistered";
    const message = form.message.value;

    const review = {
      service: _id,
      serviceName: title,
      price,
      service_img: image_url,
      customer: user?.displayName,
      img: user?.photoURL,
      email,
      message,
    };

    fetch("http://localhost:5000/reviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          alert("Review added successfully");
          form.reset();
        }
      })
      .catch((er) => console.error(er));



     
  };

  return (
    <div>
      <h2>This review section</h2>

      <div
        style={{ backgroundColor: "rgb(243,244,246)" }}
        className="card w-96 bg-neutral text-neutral-content"
      >
    <div>
    {

    }
    </div>
    <ReviewById></ReviewById>
      </div>

      {user?.uid ? (
        <>
          {" "}
          <div class="flex items-center justify-center p-12">
            <div class="mx-auto w-full max-w-[550px]">
              <form onSubmit={handleReview}>
                <div class="mb-5">
                  <label
                    for="email"
                    class="mb-3 block text-base font-medium text-[#07074D]"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    defaultValue={user?.email}
                    placeholder="example@domain.com"
                    readOnly
                    class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>

                <div class="mb-5">
                  <label
                    for="message"
                    class="mb-3 block text-base font-medium text-[#07074D]"
                  >
                    Message
                  </label>
                  <textarea
                    rows="4"
                    name="message"
                    id="message"
                    placeholder="Type your REview"
                    class="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  ></textarea>
                </div>
                <div>
                  <button class="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-base font-semibold text-white outline-none">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </>
      ) : (
        <>
          <div>
            <div className="card w-full bg-neutral text-neutral-content">
              <div className="card-body items-center text-center">
                <p></p>
                <h1 style={{ color: "rgb(194,20,29)", fontSize: "30px" }}>
                  Please Login To Add A review
                </h1>
                <div className="card-actions justify-end">
                  <Link to="/login">
                    <button className="btn btn-primary">Login</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Review;
