import React, { useState } from "react";

const TipsContainer = ({ data }) => {
  const [toggles, setToggles] = useState({});

  const handleToggle = (id) => {
    setToggles((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="w-full flex flex-col items-center px-4 py-10">
      {/* Section header */}
      <div className="flex items-center gap-3 mb-2">
        <div className="h-px w-10 bg-green-300" />
        <span className="text-green-500 text-sm font-bold tracking-widest uppercase">
          From the DB
        </span>
        <div className="h-px w-10 bg-green-300" />
      </div>
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-slate-800 text-center mb-3">
        Essential <span className="text-green-500">Tips</span> for Sustainable
        Living
      </h2>
      <p className="text-sm sm:text-base text-slate-500 text-center max-w-2xl leading-relaxed mb-10 px-2">
        Making mindful choices in our daily lives can significantly reduce our
        environmental impact. Click any card to reveal the tip.
      </p>

      {/* Cards grid */}
      <div className="w-full max-w-5xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 px-2">
        {data.map((item, i) => (
          <button
            key={item._id}
            onClick={() => handleToggle(item._id)}
            style={{ animationDelay: `${i * 80}ms` }}
            className="
                            group relative text-left w-full min-h-45
                            bg-white rounded-2xl border border-green-100
                            shadow-md hover:shadow-xl hover:shadow-green-100/60
                            p-6 flex flex-col justify-center
                            transition-all duration-300 hover:-translate-y-1
                            overflow-hidden cursor-pointer
                        "
          >
            {/* top accent */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-green-400 to-emerald-300 rounded-t-2xl" />

            {/* flip indicator */}
            <div className="absolute top-3 right-4 text-[10px] text-slate-400 font-semibold uppercase tracking-widest">
              {toggles[item._id] ? "tip ↩" : "tap"}
            </div>

            {toggles[item._id] ? (
              <p className="text-sm sm:text-base text-slate-600 font-serif leading-relaxed">
                {item.content}
              </p>
            ) : (
              <>
                <div className="w-9 h-9 rounded-xl bg-green-50 border border-green-100 flex items-center justify-center text-lg mb-3">
                  🌱
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-800 group-hover:text-green-600 transition-colors duration-200">
                  {item.title}
                </h3>
              </>
            )}

            {/* bottom glow */}
            <div className="absolute bottom-0 left-0 right-0 h-16 bg-linear-to-t from-green-50/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-b-2xl" />
          </button>
        ))}
      </div>
    </div>
  );
};

export default TipsContainer;

// import React, { useState } from 'react';

// const TipsContainer = ({ data }) => {
//     // Initialize the toggles state as an empty object
//     const [toggles, setToggles] = useState({});

//     // Function to handle toggle
//     const handleToggle = (id) => {
//         setToggles((prevToggles) => ({
//             ...prevToggles,
//             [id]: !prevToggles[id] // Toggle the boolean value for the specific id
//         }));
//     };

//     return (
//         <div className='TipsContainer p-5 m-5 flex flex-col items-center justify-center'>
//             <h2 className='text-5xl text-green-500 text-center font-serif'>Essential Tips for a Sustainable Lifestyle</h2>
//             <p className='text-lg text-green-800 w-3/4 text-center m-2 p-5 font-serif'>Embracing a sustainable lifestyle is crucial for protecting our planet and ensuring a better future for generations to come. Making mindful choices in our daily lives can significantly reduce our environmental impact. From energy conservation and water-saving techniques to supporting local agriculture and opting for eco-friendly products, there are many ways to contribute to a more sustainable world. The following tips provide practical advice on how to integrate sustainability into various aspects of your life. By adopting these practices, you can make a positive impact on the environment and promote a healthier, more sustainable lifestyle.</p>
//             <div className='cardContainer p-4 sm:p-7 m-5 max-w-[75vw] items-center justify-center flex-wrap overflow-auto flex no-scrollbar max-h-[80vh] sm:max-h-[60vh]'>
//                 {data.map((item) => (
//                     <button
//                         onClick={() => handleToggle(item._id)}
//                         key={item._id}
//                         className="cards transition duration-150 ease-in-out transform hover:-translate-y-1 hover:scale-105 hover:shadow-2xl overflow-y-auto no-scrollbar w-[60%] sm:w-[25%] m-5 bg-linear-to-r from-slate-100 to-slate-200 h-64 p-2 text-center shadow-lg border rounded-3xl"
//                     >
//                         {toggles[item._id] ? (
//                             <p className='text-xl text-green-800 font-serif p-3'>
//                             {item.content}
//                         </p>
//                         ) : (
//                             <h1 className='text-3xl text-green-500 font-bold p-2'>
//                                 {item.title}
//                             </h1>
//                         )}
//                     </button>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default TipsContainer;
