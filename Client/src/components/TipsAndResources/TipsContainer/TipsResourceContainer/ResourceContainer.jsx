import React from "react";
import { NavLink } from "react-router-dom";

const ResourceContainer = ({ data }) => {
  return (
    <div className="w-full flex flex-col items-center px-4 py-10">
      {/* Section header */}
      <div className="flex items-center gap-3 mb-2">
        <div className="h-px w-10 bg-green-300" />
        <span className="text-green-500 text-sm font-bold tracking-widest uppercase">
          Curated Links
        </span>
        <div className="h-px w-10 bg-green-300" />
      </div>
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-slate-800 text-center mb-3">
        Top <span className="text-green-500">Resources</span> for Eco-Friendly
        Living
      </h2>
      <p className="text-sm sm:text-base text-slate-500 text-center max-w-2xl leading-relaxed mb-10 px-2">
        A curated list of the best websites and programs to guide you toward a
        more sustainable lifestyle.
      </p>

      {/* Cards grid */}
      <div className="w-full max-w-5xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 px-2">
        {data.map((item, i) => (
          <NavLink
            key={item._id || i}
            to={item.URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{ animationDelay: `${i * 80}ms`, textDecoration: "none" }}
            className="
                            group relative w-full min-h-40
                            bg-white rounded-2xl border border-green-100
                            shadow-md hover:shadow-xl hover:shadow-green-100/60
                            p-6 flex flex-col gap-2
                            transition-all duration-300 hover:-translate-y-1
                            overflow-hidden
                        "
          >
            {/* top accent */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-emerald-400 to-green-300 rounded-t-2xl" />

            {/* external link indicator */}
            <div className="absolute top-3 right-4 text-slate-300 group-hover:text-green-400 transition-colors duration-200 text-sm">
              ↗
            </div>

            {/* icon bubble */}
            <div className="w-9 h-9 rounded-xl bg-green-50 border border-green-100 flex items-center justify-center text-lg">
              🔗
            </div>

            <h3 className="text-lg font-bold text-slate-800 group-hover:text-green-600 transition-colors duration-200 underline-offset-2">
              {item.title}
            </h3>
            <p className="text-sm text-slate-500 leading-relaxed line-clamp-2">
              {item.description}
            </p>

            {/* bottom glow */}
            <div className="absolute bottom-0 left-0 right-0 h-16 bg-linear-to-t from-green-50/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-b-2xl" />
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default ResourceContainer;

// import React from 'react'
// import { useState } from 'react';
// import { NavLink } from 'react-router-dom';
// const ResourceContainer = ({data}) => {
//   return (
//     <div className='TipsContainer p-5 m-5 flex flex-col items-center justify-center'>
//             <h2 className='text-4xl text-green-500 text-center font-serif'>Top Sustainable Resources for Eco-Friendly Living</h2>
//             <p className='text-lg text-green-800 w-3/4 text-center m-2 p-5 font-serif'>In today's world, sustainability is more important than ever. With growing concerns about climate change, pollution, and resource depletion, adopting sustainable practices can make a significant difference. Whether you're looking to reduce your energy consumption, conserve water, support local farmers, or find eco-friendly products, there are numerous resources available to help you on your journey. Below, we've compiled a list of some of the best resources to guide you toward a more sustainable and environmentally conscious lifestyle. These websites and programs offer valuable information, tips, and tools to help you make greener choices and contribute to a healthier planet.</p>
//             <div className='cardContainer p-1 m-5 max-w-[75vw] items-center justify-center flex-wrap overflow-auto flex no-scrollbar max-h-[40vh]'>
//                 {data.map((item) => (
//                     <button
//                         className="cards mx-2 my-5 transition duration-150 ease-in-out transform hover:-translate-y-1 hover:scale-105 hover:shadow-2xl overflow-y-auto no-scrollbar w-[80%] sm:w-[30%] bg-linear-to-r from-slate-100 to-slate-200 h-32 text-center shadow-lg border rounded-3xl"
//                     >
//                         <NavLink to={item.URL} target='blank' rel="noopener noreferrer">
//                             <h1 className='text-3xl text-green-500 underline font-bold p-2'>
//                                 {item.title}
//                             </h1>
//                             <p className='text-xl text-green-800 font-serif p-3'>
//                             {item.description}
//                             </p>
//                             </NavLink>
//                     </button>
//                 ))}
//             </div>
//         </div>
//   )
// }

// export default ResourceContainer
