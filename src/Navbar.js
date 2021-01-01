import React from 'react';
import { FcGlobe } from 'react-icons/fc';
import { FcEditImage } from 'react-icons/fc';
import { FcFaq } from 'react-icons/fc';
import { FcVideoCall } from 'react-icons/fc';
import { FcHome } from 'react-icons/fc';
import {NavLink} from "react-router-dom";

function Navbar() {
    return (
        <div className="bg-gray-100 nav w-full h-16 flex fixed z-10 shadow-2xl justify-center">

           
          <NavLink to="/">
          <div className="mt-1 w-16 ml-16 mr-20 relative -left-7 hover:bg-pink-400 transition duration-700 ease-in-out rounded-t-lg"> 
          <a href="/">
              <FcHome className="relative ml-3 w-10 h-16 -top-2" />
              <p className=" relative -mt-7 ml-25 left-3 text-gray-50">Home</p>
          </a>
          </div>
          </NavLink>

          <NavLink to="/Learn">
          <div className="relative -left-7 mt-1 w-16 hover:bg-red-400 transition duration-700 ease-in-out rounded-t-lg"> 
          <a href="/">
              <FcGlobe className="relative ml-3 w-10 h-16 -top-2" />
              <p className=" relative -mt-7 ml-25 left-3 text-gray-50">Learn</p>
          </a>
          </div>
          </NavLink>

          <NavLink to="/Cards">
          <div className="relative -left-7 mt-1 w-16 ml-20 hover:bg-green-400 transition duration-700 ease-in-out rounded-t-lg"> 
          <a href="/">
              <FcEditImage className="relative ml-3 w-10 h-16 -top-2" />
              <p className=" relative -mt-7 ml-25 left-3 text-gray-50">Cards</p>
          </a>
          </div>
          </NavLink>

          <NavLink to="/Chat">
          <div className="relative -left-7 mt-1 w-16 ml-20 hover:bg-blue-400 transition duration-700 ease-in-out rounded-t-lg"> 
          <a href="/">
              <FcFaq className="relative ml-3 w-10 h-16 -top-2" />
              <p className=" relative -mt-7 ml-30 left-3 text-gray-50">Story</p>
          </a>
          </div>
          </NavLink>

          <NavLink to="/Video">
          <div className="relative -left-7 mt-1 w-16 ml-20 hover:bg-purple-400 transition duration-700 ease-in-out rounded-t-lg"> 
          <a href="/">
              <FcVideoCall className="relative ml-3 w-10 h-16 -top-2" />
              <p className=" relative -mt-7 ml-25 left-3 text-gray-50">Video</p>
          </a>
          </div>
          </NavLink>
        
        
    

        </div>
    )
}

export default Navbar
