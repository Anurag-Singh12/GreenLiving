import React from "react";
import Featuring from "../../resources/Featuring";

const FeaturedTips = () => {
  return (
    <div className="w-full flex flex-col items-center px-4 py-10">
      {/* Section header */}
      <div className="flex items-center gap-3 mb-2">
        <div className="h-px w-10 bg-green-300" />
        <span className="text-green-500 text-sm font-bold tracking-widest uppercase">
          Highlights
        </span>
        <div className="h-px w-10 bg-green-300" />
      </div>
      <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-800 mb-10 text-center">
        Featured <span className="text-green-500">Tips</span>
      </h2>

      {/* Cards */}
      <div className="flex flex-col sm:flex-row gap-6 max-w-5xl w-full overflow-x-auto pb-2 no-scrollbar px-2">
        {Featuring.map((item, i) => (
          <div
            key={item.title}
            style={{ animationDelay: `${i * 120}ms` }}
            className="
              group relative shrink-0 w-full sm:w-[30%] min-h-55
              bg-white rounded-2xl border border-green-100
              shadow-md hover:shadow-xl hover:shadow-green-100/60
              p-6 flex flex-col gap-3
              transition-all duration-300 hover:-translate-y-2
              overflow-hidden
            "
          >
            {/* top accent */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-green-400 to-emerald-300 rounded-t-2xl" />

            {/* icon bubble */}
            <div className="w-10 h-10 rounded-xl bg-green-50 border border-green-100 flex items-center justify-center text-xl">
              🌱
            </div>

            <h3 className="text-lg font-bold text-slate-800 group-hover:text-green-600 transition-colors duration-200">
              {item.title}
            </h3>
            <p className="text-sm text-slate-500 leading-relaxed">
              {item.content}
            </p>

            {/* bottom glow on hover */}
            <div className="absolute bottom-0 left-0 right-0 h-20 bg-linear-to-t from-green-50/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-b-2xl" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedTips;

// import React, { useRef } from 'react'
// import Featuring from '../../resources/Featuring'

// const FeaturedTips = () => {
//     return (
//         <div className='Container w-3/4 p-5 m-5 flex flex-col items-center justify-center'>
//             <h2 className='text-4xl text-green-500 font-serif'>Featured Tips</h2>
//             <div className='cardContainer  p-5 m-5 max-w-[75vw] overflow-y-auto sm:overflow-x-auto flex sm:flex-row flex-col no-scrollbar h-auto'>
//                 {Featuring.map((item) => (
//                     <div key={item.title} className="cards transform hover:scale-105 transition hover:ease-in-out hover:duration-500 hover:shadow-2xl overflow-y-auto no-scrollbar w-[80%] sm:min-w-[33%] sm:max-w-[35%] m-5 bg-gradient-to-r from-slate-100 via-slate-200 to-slate-300 h-64 p-2 text-center shadow-lg border rounded-3xl">
//                         <h1 className='text-2xl text-green-500 font-bold p-2'>
//                             {item.title}
//                         </h1>
//                         <p className='text-lg text-green-800 p-3'>
//                             {item.content}
//                         </p>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     )
// }

// export default FeaturedTips
