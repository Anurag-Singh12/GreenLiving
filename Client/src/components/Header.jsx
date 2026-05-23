import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaUserCircle, FaHome, FaLeaf } from "react-icons/fa";
import { MdTipsAndUpdates } from "react-icons/md";
import { GiFootprint } from "react-icons/gi";

const NAV_LINKS = [
  { to: "/", label: "Home", icon: <FaHome size={16} />, end: true },
  {
    to: "/tips",
    label: "Tips & Resources",
    icon: <MdTipsAndUpdates size={16} />,
  },
  {
    to: "/carbon",
    label: "Carbon Footprints",
    icon: <GiFootprint size={16} />,
  },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-500 ${scrolled ? "py-2" : "py-3"}`}
      style={{
        background: scrolled ? "rgba(10,18,12,0.95)" : "rgba(10,18,12,0.78)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        borderBottom: "1px solid rgba(74,222,128,0.08)",
        boxShadow: scrolled ? "0 8px 32px rgba(0,0,0,0.35)" : "none",
        fontFamily: "'Outfit', sans-serif",
      }}
    >
      <link
        href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;600;700&display=swap"
        rel="stylesheet"
      />

      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between gap-4">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2.5 shrink-0 no-underline"
        >
          <img
            src="logo.png"
            width={36}
            alt="logo"
            className="rounded-xl"
            style={{ filter: "drop-shadow(0 0 8px rgba(74,222,128,0.5))" }}
          />
          <span className="hidden sm:block font-bold text-lg text-white tracking-tight">
            Green<span className="text-green-400">Living</span>
          </span>
        </Link>

        {/* Pill nav */}
        <nav className="flex">
          <ul
            className="flex items-center gap-1 px-2 py-2 rounded-full list-none m-0"
            style={{
              background: "rgba(255,255,255,0.08)",
              backdropFilter: "blur(16px)",
              border: "1px solid rgba(255,255,255,0.12)",
              boxShadow:
                "0 4px 24px rgba(0,0,0,0.18), inset 0 1px 0 rgba(255,255,255,0.1)",
            }}
          >
            {NAV_LINKS.map(({ to, label, icon, end }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  end={end}
                  className={({ isActive }) =>
                    `flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full text-sm font-semibold tracking-wide no-underline transition-all duration-200 ${
                      isActive
                        ? "text-white bg-green-500/20 shadow-[0_0_0_1px_rgba(74,222,128,0.35)]"
                        : "text-white/60 hover:text-white hover:bg-white/10"
                    }`
                  }
                  title={label}
                >
                  {/* icon always visible */}
                  <span className="shrink-0">{icon}</span>
                  {/* label hidden on small screens */}
                  <span className="hidden sm:inline">{label}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* Profile icon */}
        <NavLink
          to="/profile"
          className={({ isActive }) =>
            `w-9.5 h-9.5 rounded-full flex items-center justify-center no-underline transition-all duration-200 shrink-0 ${
              isActive
                ? "text-green-400 bg-green-500/10"
                : "text-white/70 hover:text-white hover:bg-green-500/15"
            }`
          }
          style={{ border: "1px solid rgba(255,255,255,0.12)" }}
          aria-label="Profile"
        >
          <FaUserCircle size={18} />
        </NavLink>
      </div>
    </header>
  );
};

export default Header;

// import React from 'react'
// import { Link, NavLink } from 'react-router-dom'
// import { FaUserCircle } from "react-icons/fa";

// const Header = () => {
//   return (
//     <div className='flex flex-col md:flex-row z-10 bg-linear-to-r from-slate-100 to-slate-200 sticky bg-white justify-center top-0 font-bold'>
//       <div className='flex items-center justify-between w-full p-3'>
//         <button className='p-1 md:m-2'>
//           <Link to="/"><img className='rounded-3xl shadow-[0_10px_30px_rgba(0,0,0,0.5)]' src="logo.png" width={50} alt="" /></Link>
//         </button>
//         <ul className='flex flex-col md:flex-row w-full md:gap-5 gap-3 items-center justify-center p-3'>
//           <li><NavLink className={({ isActive }) =>
//             isActive ? 'text-green-500' : 'text-black'
//           } to="/tips">TIPS & RESOURCES</NavLink></li>
//           <li><NavLink className={({ isActive }) =>
//             isActive ? 'text-green-500' : 'text-black'
//           } to="/">HOME</NavLink></li>
//           <li><NavLink className={({ isActive }) =>
//             isActive ? 'text-green-500' : 'text-black'
//           } to="/carbon">CARBON FOOTPRINTS</NavLink></li>
//         </ul>
//         <button className='p-1 md:m-2'>
//           <NavLink className={({ isActive }) =>
//             isActive ? 'text-green-600' : 'text-black'
//           } to="/profile"><FaUserCircle size={40} /></NavLink>
//         </button>
//       </div>
//     </div>
//   )
// }

// export default Header
