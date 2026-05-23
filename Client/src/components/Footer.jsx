import React from "react";
import { Link } from "react-router-dom";
import { FaReact, FaNode } from "react-icons/fa";
import { SiTailwindcss, SiVite, SiMongodb, SiExpress } from "react-icons/si";
import { FaGithub } from "react-icons/fa";

const techStack = [
  {
    label: "React",
    icon: <FaReact size={22} className="text-cyan-400" />,
    to: "https://react.dev/",
  },
  {
    label: "Tailwind",
    icon: <SiTailwindcss size={22} className="text-sky-400" />,
    to: "https://tailwindcss.com/",
  },
  {
    label: "Vite",
    icon: <SiVite size={22} className="text-purple-400" />,
    to: "https://vitejs.dev/",
  },
  {
    label: "MongoDB",
    icon: <SiMongodb size={22} className="text-green-500" />,
    to: "https://www.mongodb.com/",
  },
  {
    label: "Node",
    icon: <FaNode size={22} className="text-green-400" />,
    to: "https://nodejs.org/en",
  },
  {
    label: "Express",
    icon: <SiExpress size={22} className="text-slate-300" />,
    to: "https://expressjs.com/",
  },
];

const team = [
  { label: "Anurag Singh", to: "https://github.com/iamanurag-singh" },
  { label: "Kunal Nasa", to: "https://github.com/KunalNasa" },
  { label: "Charanjeet", to: "https://github.com/git-charanjeet" },
  { label: "Divyansh Vats", to: "https://github.com/vatsdivyansh" },
  { label: "Vatsal Garg", to: "https://github.com/vatsdivyansh" },
];

const credits = [
  { label: "IBM SkillsBuild", to: "https://skillsbuild.org/" },
  { label: "CSR Box", to: "https://csrbox.org/" },
];

const Footer = () => {
  return (
    <footer
      className="relative w-full overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, rgba(10,18,12,0.97) 0%, #080f0a 100%)",
        borderTop: "1px solid rgba(74,222,128,0.1)",
        fontFamily: "'Outfit', sans-serif",
      }}
    >
      <link
        href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />

      {/* subtle bg glow */}
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-48 rounded-full bg-green-500/5 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 pt-10 pb-6">
        {/* Logo + tagline */}
        <div className="flex flex-col items-center mb-8">
          <div className="flex items-center gap-3 mb-2">
            <img
              src="logo.png"
              width={36}
              alt="logo"
              className="rounded-xl opacity-90"
              style={{ filter: "drop-shadow(0 0 6px rgba(74,222,128,0.4))" }}
            />
            <span className="text-white font-bold text-lg tracking-tight">
              Green<span className="text-green-400">Living</span>
            </span>
          </div>
          <p className="text-slate-500 text-sm text-center max-w-sm leading-relaxed">
            Helping you adopt eco-friendly habits and reduce your environmental
            impact one step at a time.
          </p>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-white/8 mb-8" />

        {/* Three columns */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {/* Technologies — icon grid */}
          <div>
            <h4 className="text-green-400 font-bold text-xs tracking-widest uppercase mb-4">
              Technologies
            </h4>
            <div className="grid grid-cols-3 gap-3">
              {techStack.map(({ label, icon, to }) => (
                <Link
                  key={label}
                  to={to}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-1.5 p-2.5 rounded-xl no-underline transition-all duration-200 group"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.07)",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.background = "rgba(74,222,128,0.08)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.background =
                      "rgba(255,255,255,0.04)")
                  }
                >
                  {icon}
                  <span className="text-slate-400 text-[10px] font-semibold group-hover:text-slate-200 transition-colors">
                    {label}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* Core Team */}
          <div className="flex flex-col items-center">
            <h4 className="text-green-400 font-bold text-xs tracking-widest uppercase mb-4">
              Core Team
            </h4>
            <ul className="flex flex-col gap-2 list-none m-0 p-0">
              {team.map(({ label, to }) => (
                <li key={label}>
                  <Link
                    to={to}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-slate-400 hover:text-green-400 no-underline transition-colors duration-200 text-sm"
                  >
                    <FaGithub size={13} className="opacity-50" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Credits */}
          <div className="flex flex-col items-center">
            <h4 className="text-green-400 font-bold text-xs tracking-widest uppercase mb-4">
              Credits
            </h4>
            <ul className="flex flex-col gap-2 list-none m-0 p-0">
              {credits.map(({ label, to }) => (
                <li key={label}>
                  <Link
                    to={to}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-green-400 no-underline transition-colors duration-200 text-sm"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="w-full h-px bg-white/8 mt-8 mb-5" />
        <p className="text-center text-slate-600 text-xs">
          © {new Date().getFullYear()} Sustainable Living Dashboard. Built with
          🌱 for the planet.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

// import React from 'react'
// import { Link } from 'react-router-dom'

// const Footer = () => {
//   return (
//     <div className='flex w-full flex-col items-center justify-center shadow-xl bg-linear-to-r from-slate-100 to-slate-200 p-5 md:p-10'>
//       {/* <h4 className='text-lg text-green-800 md:text-2xl font-mono text-center mb-5'>
//         Contribute to our site at <Link className='text-blue-600 ml-1' to="https://github.com/link here" target='_blank'>
//              GitHub
//         </Link> or click the GitHub logo on the home page.
//       </h4> */}
//       <div className="w-full text-center grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 p-2">
//         <div className='flex flex-col'>
//           <h4 className='text-lg md:text-xl text-green-500 font-bold my-2'>Technologies</h4>
//           <ul className='ml-4'>
//             <li><Link className='text-blue-500 hover:underline' to="https://react.dev/" target='_blank'>React</Link></li>
//             <li><Link className='text-blue-500 hover:underline' to="https://tailwindcss.com/" target='_blank'>Tailwind</Link></li>
//             <li><Link className='text-blue-500 hover:underline' to="https://vitejs.dev/" target='_blank'>Vite</Link></li>
//             <li><Link className='text-blue-500 hover:underline' to="https://www.mongodb.com/" target='_blank'>MongoDB</Link></li>
//             <li><Link className='text-blue-500 hover:underline' to="https://nodejs.org/en" target='_blank'>Node</Link></li>
//             <li><Link className='text-blue-500 hover:underline' to="https://expressjs.com/" target='_blank'>Express</Link></li>
//           </ul>
//         </div>
//         <div className='flex flex-col'>
//           <h4 className='text-lg text-green-500 md:text-xl font-bold my-2'>Core Team Members</h4>
//           <ul className='ml-4'>
//             <li><Link className='text-blue-500 hover:underline' to="https://github.com/iamanurag-singh" target='_blank'>Anurag Singh</Link></li>
//             <li><Link className='text-blue-500 hover:underline' to="https://github.com/KunalNasa" target='_blank'>Kunal Nasa</Link></li>
//             <li><Link className='text-blue-500 hover:underline' to="https://github.com/git-charanjeet" target='_blank'>Charanjeet</Link></li>
//             <li><Link className='text-blue-500 hover:underline' to="https://github.com/vatsdivyansh" target='_blank'>Divyansh Vats</Link></li>
//             <li><Link className='text-blue-500 hover:underline' to="https://github.com/vatsdivyansh" target='_blank'>Vatsal Garg</Link></li>
//           </ul>
//         </div>
//         <div className='flex flex-col'>
//           <h4 className='text-lg text-green-500 md:text-xl font-bold my-2'>Credits</h4>
//           <ul className='ml-4'>
//             <li><Link className='text-blue-500 hover:underline' to="https://skillsbuild.org/" target='_blank'>IBM SkillsBuild</Link></li>
//             <li><Link className='text-blue-500 hover:underline' to="https://csrbox.org/" target='_blank'>CSR Box</Link></li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Footer
