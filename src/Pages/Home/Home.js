import React from "react";

const Home = () => {
  return (
    <div className="mt-10">
      <div
        className="hero lg:min-h-screen rounded  "
        style={{
          backgroundImage: `url("https://i.ibb.co/K9v46qr/hero-1.jpg")`,
          backgroundColor: "black",
        }}
      >
        <div className="hero-overlay bg-black opacity-25"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className=" text-white w-3/4 m-auto">
            <h1 className="mb-5 lg:text-5xl sm:text-3xl font-bold">
              Photography Is An Immediate Reaction, Drawing Is A Meditation
              Props.
            </h1>
            <p className="mb-5">
              Photography is a way of feeling, of touching, of loving. What you
              have caught on film is captured forever... it remembers little
              things, long after you have forgotten everything.
            </p>
            <button className="btn btn-outline btn-primary">Get Started</button>
          </div>
        </div>
      </div>

      {/* about us contact us */}

      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src="https://i.ibb.co/5W1Txfm/photo-1556103255-4443dbae8e5a.jpg"
            alt=""
            style={{ height: "500px" }}
            className=" rounded-lg shadow-2xl"
          />
          <div className="lg:w-1/2 m-auto">
            <h1 className="text-3xl font-bold">PHOTOGRAPHY IS GREAT</h1>
            <p className="py-6">
            Photography is like a moment, an instant. You need a half-second
              to get the photo. So it's good to capture people when they are
              themselves.I became passionate about design filmmaking when I
              graduated from UCLA, and one of the things I always wanted to do
              was shoot really high quality film, so I got into time-lapse
              photography - so that means when you shoot a flower.
            </p>
            <div className="bg-gray-100 p-5 rounded center">
          <p className="py-6">
              Photography is like a moment, an instant. You need a half-second
              to get the photo. So it's good to capture people when they are
              themselves.I became passionate about design filmmaking when I
              graduated from UCLA, and one of the things I always wanted to do
              was shoot really high quality film, so I got into time-lapse
              photography - so that means when you shoot a flower.
            </p>
          </div>
          </div>
        </div>
      </div>

      {/* image gallery */}

      <section class="overflow-hidden text-gray-700">
  <div class="container px-5 py-2 mx-auto lg:pt-24 lg:px-32">
    <div class="flex flex-wrap -m-1 md:-m-2">
      <div class="flex flex-wrap w-1/2">
        <div class="w-1/2 p-1 md:p-2">
          <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
            src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(70).webp"></img>
        </div>
        <div class="w-1/2 p-1 md:p-2">
          <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
            src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(72).webp"></img>
        </div>
        <div class="w-full p-1 md:p-2">
          <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
            src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp"></img>
        </div>
      </div>
      <div class="flex flex-wrap w-1/2">
        <div class="w-full p-1 md:p-2">
          <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
            src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(74).webp"></img>
        </div>
        <div class="w-1/2 p-1 md:p-2">
          <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
            src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(75).webp"></img>
        </div>
        <div class="w-1/2 p-1 md:p-2">
          <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
            src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(77).webp"></img>
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
  );
};

export default Home;
