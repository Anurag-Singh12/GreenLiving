import React, { useEffect, useRef } from "react";
import FeaturedTips from "./FeaturedTips";
import GlobalStats from "./GlobalStats";

const Container = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    el.style.opacity = "0";
    el.style.transform = "translateY(24px)";
    requestAnimationFrame(() => {
      el.style.transition = "opacity 0.8s ease, transform 0.8s ease";
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    });
  }, []);

  return (
    <div className="w-full flex flex-col items-center justify-center">
      {/* Hero section */}
      <div
        ref={heroRef}
        className="relative w-full flex flex-col items-center justify-center px-6 py-20 overflow-hidden"
      >
        {/* background blobs */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-150 h-150 rounded-full bg-green-100/60 blur-3xl pointer-events-none" />
        <div className="absolute top-10 left-10 w-48 h-48 rounded-full bg-emerald-100/40 blur-2xl pointer-events-none" />
        <div className="absolute bottom-0 right-10 w-64 h-64 rounded-full bg-green-200/30 blur-2xl pointer-events-none" />

        {/* leaf emoji badge */}
        <div className="relative z-10 mb-4 px-4 py-1.5 rounded-full bg-green-100 border border-green-200 text-green-700 text-sm font-semibold tracking-wide flex items-center gap-1.5">
          <span>🌿</span> Eco-Friendly Living
        </div>

        <h1 className="relative z-10 text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-center leading-tight">
          <span className="text-slate-800">Sustainable</span>
          <br />
          <span className="bg-linear-to-r from-green-500 to-emerald-400 bg-clip-text text-transparent">
            Living Dashboard
          </span>
        </h1>

        <p className="relative z-10 text-base md:text-lg text-slate-600 mt-6 max-w-2xl text-center leading-relaxed font-light">
          Welcome to your Sustainable Living Dashboard! Our mission is to help
          you adopt more eco-friendly habits and make informed decisions to
          reduce your environmental impact. Explore tips, resources, and tools
          designed to support your journey.
        </p>

        <div className="relative z-10 flex gap-4 mt-8">
          <a
            href="/tips"
            className="px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-xl shadow-lg shadow-green-200 transition-all duration-200 hover:scale-105 hover:shadow-green-300"
          >
            Explore Tips
          </a>
          <a
            href="/carbon"
            className="px-6 py-3 bg-white hover:bg-green-50 text-green-700 font-semibold rounded-xl border border-green-200 shadow-sm transition-all duration-200 hover:scale-105"
          >
            Carbon Footprint
          </a>
        </div>
      </div>

      {/* Featured Tips */}
      <div className="w-full flex items-center justify-center mb-4">
        <FeaturedTips />
      </div>

      {/* Quick Stats */}
      <div className="w-full flex flex-col items-center px-4 pb-16">
        <div className="flex items-center gap-3 mb-8">
          <div className="h-px w-12 bg-green-300" />
          <h2 className="text-4xl text-slate-800 font-serif font-bold">
            Quick <span className="text-green-500">Stats</span>
          </h2>
          <div className="h-px w-12 bg-green-300" />
        </div>
        <GlobalStats />
      </div>
    </div>
  );
};

export default Container;

// import React from 'react'
// import FeaturedTips from './FeaturedTips'
// import GlobalStats from './GlobalStats'
// import { FaGithub } from "react-icons/fa";
// import { NavLink } from 'react-router-dom';

// const Container = () => {
//   return (
//     <div className='w-full flex flex-col items-center justify-center px-4'>
//       <div className='w-full md:w-3/4 p-4 md:p-8'>
//         <h1 className='text-xl text-green-500 md:text-6xl lg:text-8xl font-serif text-center'>Sustainable Living Dashboard</h1>
//         <p className='text-base text-green-800 md:text-lg lg:text-xl font-serif mt-4 text-center'>
//           Welcome to your Sustainable Living Dashboard! Our mission is to help you adopt more eco-friendly habits and make informed decisions to reduce your environmental impact. Explore our tips, resources, and tools designed to support your journey towards a sustainable lifestyle.
//         </p>
//       </div>
//       <div className='w-full flex items-center justify-center mb-8'>
//         <FeaturedTips />
//       </div>
//       <div className='w-full flex flex-col items-center'>
//         <h2 className='text-4xl text-green-500 font-serif'>Quick Stats</h2>
//         <GlobalStats />
//         {/* <button
//           className='text-3xl md:text-4xl lg:text-5xl bg-black text-white px-2 py-2 rounded-full fixed bottom-4 right-4'
//           style={{ position: 'fixed' }}
//         >
//           {/* <NavLink to="https://github.com/link here" target='_blank'>
//             <FaGithub />
//           </NavLink>
//         </button> */}
//       </div>
//     </div>
//   )
// }

// export default Container
