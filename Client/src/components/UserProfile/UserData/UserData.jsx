import React from "react";

const UserData = ({ updateReloadState, props }) => {
  const { username, email, id } = props;

  return (
    <div className="min-h-[90vh] w-full flex items-center justify-center px-4 bg-linear-to-br from-slate-50 via-white to-green-50/30">
      <div className="fixed top-20 left-1/3 w-80 h-80 rounded-full bg-green-100/40 blur-3xl pointer-events-none" />
      <div className="fixed bottom-10 right-1/4 w-64 h-64 rounded-full bg-emerald-100/30 blur-3xl pointer-events-none" />

      <div className="relative z-10 w-full max-w-md">
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl shadow-green-100/50 border border-green-100/60 p-8 md:p-10">
          {/* Avatar + greeting */}
          <div className="flex flex-col items-center mb-8">
            <div className="w-20 h-20 rounded-2xl bg-green-50 border-2 border-green-100 flex items-center justify-center text-4xl mb-4 shadow-md">
              🌿
            </div>
            <h2 className="text-2xl font-bold text-slate-800">Welcome back!</h2>
            <p className="text-green-600 font-semibold text-lg">{username}</p>
          </div>

          {/* Info fields */}
          <div className="flex flex-col gap-3 mb-8">
            {[
              { label: "Username", value: username, icon: "👤" },
              { label: "Email", value: email, icon: "📧" },
              { label: "User ID", value: id, icon: "🔑" },
            ].map(({ label, value, icon }) => (
              <div
                key={label}
                className="flex items-center gap-3 px-4 py-3 bg-slate-50 rounded-xl border border-slate-100 cursor-not-allowed"
              >
                <span className="text-lg">{icon}</span>
                <div className="flex flex-col min-w-0">
                  <span className="text-xs text-slate-400 font-semibold uppercase tracking-wide">
                    {label}
                  </span>
                  <span className="text-sm text-slate-700 font-medium break-all">
                    {value}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Logout */}
          <button
            onClick={() => {
              localStorage.clear();
              updateReloadState();
            }}
            className="w-full py-3 bg-red-50 hover:bg-red-100 text-red-600 font-bold rounded-xl border border-red-200 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
          >
            Sign Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserData;

// import React from 'react'

// const UserData = ({updateReloadState, props }) => {
//     const { username, email, id } = props
//     return (
//         <div className='InfoContainer'>
//             <div className='UserContainer flex flex-col items-center justify-center h-[90vh] w-full'>
//                 <div className=' w-[80%] sm:w-[40%] p-5 m-10 shadow-2xl border rounded-xl bg-linear-to-r from-slate-100 to-slate-200 flex items-center justify-center flex-col h-auto'>
//                         <h1 className='w-full p-4 mb-4 text-center text-3xl font-semibold '>Welcome {username} 👋 </h1>
//                         <h1 className='text-left hover:cursor-not-allowed border break-all rounded-lg bg-white p-1 px-3 m-2 w-[80%]'>username : {username} </h1>
//                         <h1 className='hover:cursor-not-allowed text-left border break-all rounded-lg bg-white p-1 px-3 m-2 w-[80%]'>email : {email}</h1>
//                         <h1 className='hover:cursor-not-allowed text-left border break-all rounded-lg bg-white p-1 px-3 m-2 w-[80%]'>user_id : {id}</h1>
//                         <button onClick={() => {localStorage.clear()
//                         updateReloadState()}} className='w-52 border rounded-lg bg-red-400 transform hover:scale-105 transition duration-300 shadow-xl ease-in-out p-2 mt-7 font-bold m-3'>LogOut</button>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default UserData
