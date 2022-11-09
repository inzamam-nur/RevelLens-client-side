import React from 'react';
import { useContext } from 'react';
import { FaUserAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logo from '../../../Assests/logo.png'
import { AuthContext } from '../../../Context/Authprovider/Authprovider';
const Navbarr = () => {
  const {user,logout}=useContext(AuthContext)
  const handleLogout=()=>{
    logout()
    .then(() => {})
    .catch((e) => {});
  }
    return (
  
      <div className="navbar bg-gray-100 rounded pt-5 pb-5	">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            <li><Link to='/blog'>Blog</Link></li>
           
            <li><Link>Faq</Link></li>
          </ul>
        </div>
        <Link to='/' className=" normal-case text-xl p-0  "><img style={{height:'60px'}} src={logo} alt="" /></Link>
        <Link to='/' className=" normal-case text-xl font-bold italic"><span >R</span ><span style={{color:'rgb(204,73,79)'}}>e</span><span style={{color:'rgb(207,35,143)'}}>v</span><span style={{color:'rgb(4,186,200)'}}>e</span><span style={{color:'rgb(120,189,65)'}}>l</span> 
        L<span style={{color:'rgb(241,89,40)'}}>e</span><span style={{color:'rgb(207,35,143)'}}>n</span>s
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
          <li><Link to='/blog'>Blog</Link></li>
      
          <li><Link>Faq</Link></li>
        </ul>
      </div>
      <div className="navbar-end">
      {user?.photoURL? (
            <div className="tooltip tooltip-bottom" data-tip={user?.displayName}>
              <button>
                {" "}
                <img
                  style={{ height: "30px" }}
                  className="mr-5 mt-3 rounded-full"
                  src={user?.photoURL}
                  alt=""
                />
              </button>
            </div>
          ) : (
            <>
              <FaUserAlt className="mr-5 rounded-full"></FaUserAlt>
            </>
          )}
          {user?.uid ? (
            <>
              <h2 className="mr-5">{user?.displayName}</h2>
              <Link onClick={handleLogout} className="btn">
                Logout
              </Link>
            </>
          ) : (
            <>
              <Link to="/login" className="btn mr-5">
                Login
              </Link>
              <Link to="/signup" className="btn">
                SignUp
              </Link>
            </>
          )}
      </div>
    </div>
    );
};

export default Navbarr;