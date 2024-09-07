import React, { useState } from 'react'
import { IoMdAdd } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";

const Sc = ({val1,val2}) => {
    const [val, setval] = useState(false);
    const myfunc=()=>{
        setval(!val);
    }
  return (
    <>
      <div className="netsc hover:cursor-pointer transition-all duration-150 ease-in-out">
        <div
          onClick={myfunc}
          className="list-none flex transition-all duration-150 ease-in-out justify-between px-5 py-6 items-end md:text-2xl"
        >
          {val1}
          <span className="transition-all duration-150 ease-in-out delay-200">
            {val ? <RxCross2 size={30}  /> : <IoMdAdd size={30} />}
          </span>
        </div>

        {/* Transition on height */}
        <div
          className={`overflow-hidden transition-all duration-500 ease-in-out ${val ? 'max-h-screen' : 'max-h-0'}`}
        >
          <p className="mt-1 border-t-2 border-black px-5 py-2">
            {val2}
          </p>
        </div>
      </div>
    </>
  );
};


export default Sc