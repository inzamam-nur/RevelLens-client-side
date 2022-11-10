import React, { useContext } from "react";
import { AuthContext } from "../../Context/Authprovider/Authprovider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const AddService = () => {
  const { user } = useContext(AuthContext);

  const handleService=(event)=>{
    event.preventDefault();
    const form=event.target;
    const title=form.servicename.value;
    const email = user?.email || "unregistered";
    const image_url=form.img.value;
    const price=form.price.value;
    const details=form.details.value;
    console.log(title,email,image_url,price,details)
   const service={
    title,
    email,
    image_url,
    price,
    details,
   };

   fetch("http://localhost:5000/service", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(service),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          toast("Service Added Successfully!");
          form.reset();
        }
      })
      .catch((er) => console.error(er));

  }
  return (
    <div>
      <div className="flex items-center justify-center p-12">
        <div className="mx-auto w-full max-w-[550px]">
          <form onSubmit={handleService}>
            <div className="mb-5">
              <label
                for="name"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Service Name
              </label>
              <input
                type="text"
                name="servicename"
                id="name"
                required
                placeholder="Service Name"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            <div className="mb-5">
              <label
                for="email"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Total Service Provided
              </label>
              <input
                type="email"
                name="email"
                id="email"
                defaultValue={user?.email}
                placeholder="example@domain.com"
                readOnly
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            <div className="mb-5">
              <label
                for="subject"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Img_url
              </label>
              <input
                type="text"
                name="img"
                id="  Img_url"
                placeholder="Enter your   Img_url"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            <div className="mb-5">
              <label
                for="price"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Price
              </label>
              <input
                type="text"
                name="price"
                id="price"
                placeholder="Enter your Price"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            <div className="mb-5">
              <label
                for="message"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Details
              </label>
              <textarea
                rows="4"
                name="details"
                id="Details"
                placeholder="Type your Details"
                className="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              ></textarea>
            </div>
            <div>
              <button className="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-base font-semibold text-white outline-none">
                Submit
              </button>
              <ToastContainer />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddService;
