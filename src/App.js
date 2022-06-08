import "./App.css";
import React, { useState, useEffect } from "react";
import {userData} from './UserDataObj';

function App() {
   const [first, setfirst] = useState(userData)
const colors = ['#000', '#FB7185', '#34D399', '#F472B6', "#C084FC", "#22D3EE"];

useEffect(() => {
    setfirst([...first, colors]);
}, [])


  return (
    <div className="flex justify-center items-center align-middle h-screen sm-height-[100px] 	">
      <div className=" 	shadow-lg p-5 rounded-lg ">
        <h1 className="font-medium	mb-2">Invite users</h1>
        <div className="inline-block">
        <div className="flex space-x-5 > * + * ">
        <input
          type="text"
          placeholder="Email (press enter for multiple)"
          className=" border-2 w-full p-2 rounded-lg ring-gray-300"
        />
        <button className=" w-44	bg-gray-400 text-white rounded-lg">
          Send Invite
        </button>
      </div>
        </div>
        <div className="mt-5">
          <hr />
        </div>
        <div className="overflow-y-auto h-[350px] mt-5 pr-2"> 
        {first.map((item, ind) => {
        return (
          <div  key={ind} className=" flex justify-between items-center w-full h-[70px] rounded-xl  shadow-lg p-5 mt-2 cursor-pointer scale-75s">
            <div className="flex items-center ">
              <h1 style={{ backgroundColor: colors[ind] }} className=" mr-5 flex justify-center items-center	 text-white w-[40px] h-[40px] rounded-[50%]  ">
                <span >{item.first}</span>
              </h1>
              <h1>
                {item.name} <span className="text-gray-400">{item.nick}</span>
              </h1>
            </div>
            <div>
              {item.designation ? (
                item.designation
              ) : (
                <select name="" id="" className="border-none" style={{color: "#10B981"}}>
                    
                    <option
                      value=""
                      className="border-none	outline-0"
                    > 
                      Can Edit
                    </option>
                  <option
                    value=""
                    className="border-none outline-0"
                  >
                    Can View
                  </option>
                  <option
                  style={{color: "#F43F5E"}}
                    value=""
                    className="border-none text-red-600		 outline-0"
                  >
                    Remove
                  </option>
                </select>
              )}
            </div>
          </div>
        ); 
      })}
        </div>
        <div className="mt-5 ">
          <hr />
        </div>
        <div className="mt-3">
        <div className="flex justify-between">
      <div className="flex items-center text-green-600" style={{color: "#10B981"}}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-green-600"
          viewBox="0 0 20 20"
          fill="currentColor"
          style={{ width: "20px" }}
        >
          <path
            fillRule="evenodd"
            d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z"
            clipRule="evenodd"
          />
        </svg>
        <a href="" className="text-green-600">Copy Story Link</a>
      </div>
      <div className="flex items-center">
        <h1>Any one with link: </h1>
        <select name="" id="" style={{color: "#10B981"}} className="text-grey ">
          <option value="">Can Edit</option>
          <option value="">Can View</option>
          <option style={{color: "red"}} value="">Remove</option>
        </select>
      </div>
    </div>
        </div>
      </div>
    </div>
  );
}

export default App;
