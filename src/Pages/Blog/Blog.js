import React from "react";

const Blog = () => {
  return (
    <div>
      <div className="accordion accordion-flush" id="accordionFlushExample">
        <div className="accordion-item border-t-0 border-l-0 border-r-0 rounded-none bg-gray-100 mt-10 border ">
          <h2 className="accordion-header mb-0" id="flush-headingOne">
            <button
              className="accordion-button
    relative
    flex
    items-center
    w-full
    py-4
    px-5
    text-base text-gray-800 text-left
    bg-gray-100
    border-0
    rounded-none
    transition
    focus:outline-none"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseOne"
              aria-expanded="false"
              aria-controls="flush-collapseOne"
            >
              Difference between SQL and NoSQ ?
            </button>
          </h2>
          <div
            id="flush-collapseOne"
            className="accordion-collapse border-0 collapse show"
            aria-labelledby="flush-headingOne"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body py-4 px-5">
              The programming language used to communicate with relational
              databases is called SQL. Relational databases represent data as
              rows and tables of records with logical connections between them.
              NoSQL DBMs are a subset of non-relational DBMs that often do not
              employ SQL. There are five practical differences between SQL and
              NoSQL: <br />
              <br />
              1.Language <br />
              2.Scalability <br />
              3.Structure <br />
              4.Properties <br />
              5.Support and communities <br />
            </div>
          </div>
        </div>
        <div className="accordion-item border-t-0 border-l-0 border-r-0 rounded-none bg-gray-100 mt-10 mb-10 border ">
          <h2 className="accordion-header mb-0" id="flush-headingOne">
            <button
              className="accordion-button
    relative
    flex
    items-center
    w-full
    py-4
    px-5
    text-base text-gray-800 text-left
    bg-gray-100
    border-0
    rounded-none
    transition
    focus:outline-none"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseOne"
              aria-expanded="false"
              aria-controls="flush-collapseOne"
            >
              What is JWT, and how does it work?
            </button>
          </h2>
          <div
            id="flush-collapseOne"
            className="accordion-collapse border-0 collapse show"
            aria-labelledby="flush-headingOne"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body py-4 px-5">
              JWT, or JSON Web Token, is an open standard that allows a client
              and a server to exchange security-related data. Every JWT has a
              set of encoded JSON objects, including claims. To ensure that the
              claims cannot be changed after the token is issued, JWTs are
              signed using a cryptographic technique.A client and a server can
              exchange security information using the open standard JSON Web
              Token. Every JWT has a set of encoded JSON objects, including
              claims. To ensure that the claims cannot be changed after the
              token is issued, JWTs are signed using a cryptographic technique.
            </div>
          </div>
        </div>
        <div className="accordion-item border-t-0 border-l-0 border-r-0 rounded-none bg-gray-100 mt-10 border ">
          <h2 className="accordion-header mb-0" id="flush-headingOne">
            <button
              className="accordion-button
    relative
    flex
    items-center
    w-full
    py-4
    px-5
    text-base text-gray-800 text-left
    bg-gray-100
    border-0
    rounded-none
    transition
    focus:outline-none"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseOne"
              aria-expanded="false"
              aria-controls="flush-collapseOne"
            >
              What is the difference between javascript and NodeJS?
            </button>
          </h2>
          <div
            id="flush-collapseOne"
            className="accordion-collapse border-0 collapse show"
            aria-labelledby="flush-headingOne"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body py-4 px-5">
              1. NodeJS: NodeJS is a free, open-source Javascript runtime
              environment that enables server-side execution of Javascript.
              Javascript code can execute outside of a browser thanks to
              Node.js. Node.js has a large number of modules and is primarily
              used for web development. <br />
              <br />
              2. JavaScript: A scripting language is Javascript. The most common
              abbreviation is JS. One may say that Javascript is the ECMA script
              that has been updated. Although it is built on prototype
              inheritance, Javascript is a high-level programming language that
              makes use of the Oops idea.
            </div>
          </div>
        </div>
        <div className="accordion-item border-t-0 border-l-0 border-r-0 rounded-none bg-gray-100 mt-10 border ">
          <h2 className="accordion-header mb-0" id="flush-headingOne">
            <button
              className="accordion-button
    relative
    flex
    items-center
    w-full
    py-4
    px-5
    text-base text-gray-800 text-left
    bg-gray-100
    border-0
    rounded-none
    transition
    focus:outline-none"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseOne"
              aria-expanded="false"
              aria-controls="flush-collapseOne"
            >
              How does NodeJS handle multiple requests at the same time?
            </button>
          </h2>
          <div
            id="flush-collapseOne"
            className="accordion-collapse border-0 collapse show"
            aria-labelledby="flush-headingOne"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body py-4 px-5">
              Numerous client requests are received by NodeJS, which adds them
              to EventQueue. The event-driven architecture approach was used in
              the construction of NodeJS. The EventLoop in NodeJS is an infinite
              loop that accepts and processes requests.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
