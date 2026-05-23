import React, { useState } from "react";
import axios from "axios";
import { loginURL } from "../../../helpers/ImportantRoutes";
import UserRegister from "./UserRegister";

const UserLogin = ({ updateReloadState }) => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [register, setregister] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg("");
    setLoading(true);
    try {
      const getData = await axios.post(loginURL, { email, password });
      const token = getData.data;
      localStorage.setItem("Authorization", "Bearer " + token.accessToken);
      setemail("");
      setpassword("");
      updateReloadState();
    } catch (error) {
      const msg = error.response?.data?.message || "Invalid email or password";
      setErrorMsg(msg);
    }
    setLoading(false);
  };

  if (register) return <UserRegister updateReloadState={updateReloadState} />;

  return (
    <div className="min-h-[90vh] w-full flex items-center justify-center px-4 bg-linear-to-br from-slate-50 via-white to-green-50/30">
      {/* background blobs */}
      <div className="fixed top-20 left-1/3 w-80 h-80 rounded-full bg-green-100/40 blur-3xl pointer-events-none" />
      <div className="fixed bottom-10 right-1/4 w-64 h-64 rounded-full bg-emerald-100/30 blur-3xl pointer-events-none" />

      <div className="relative z-10 w-full max-w-md">
        {/* Card */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl shadow-green-100/50 border border-green-100/60 p-8 md:p-10">
          {/* Header */}
          <div className="flex flex-col items-center mb-8">
            <div className="w-14 h-14 rounded-2xl bg-green-50 border border-green-100 flex items-center justify-center text-2xl mb-4 shadow-sm">
              🌿
            </div>
            <h2 className="text-2xl font-bold text-slate-800">Welcome back</h2>
            <p className="text-slate-500 text-sm mt-1">
              Sign in to your account
            </p>
          </div>

          {/* Error */}
          {errorMsg && (
            <div className="mb-5 px-4 py-3 bg-red-50 border border-red-200 text-red-600 rounded-xl text-sm text-center">
              {errorMsg}
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="flex flex-col gap-1.5">
              <label
                className="text-sm font-semibold text-slate-600"
                htmlFor="login-email"
              >
                Email
              </label>
              <input
                id="login-email"
                type="email"
                required
                value={email}
                onChange={(e) => setemail(e.target.value)}
                placeholder="Enter your email"
                className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50/60 placeholder:text-slate-400 text-slate-800 focus:outline-none focus:ring-2 focus:ring-green-400/50 focus:border-green-400 transition-all duration-200"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label
                className="text-sm font-semibold text-slate-600"
                htmlFor="login-password"
              >
                Password
              </label>
              <input
                id="login-password"
                type="password"
                required
                value={password}
                onChange={(e) => setpassword(e.target.value)}
                placeholder="Enter your password"
                className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50/60 placeholder:text-slate-400 text-slate-800 focus:outline-none focus:ring-2 focus:ring-green-400/50 focus:border-green-400 transition-all duration-200"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full mt-2 py-3 bg-green-500 hover:bg-green-600 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold rounded-xl shadow-md shadow-green-200 transition-all duration-200 hover:scale-[1.02] hover:shadow-green-300 active:scale-[0.98]"
            >
              {loading ? (
                <span className="flex items-center justify-center gap-2">
                  <svg
                    className="animate-spin h-4 w-4"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v8z"
                    />
                  </svg>
                  Signing in...
                </span>
              ) : (
                "Sign In"
              )}
            </button>
          </form>

          {/* Switch to register */}
          <p className="text-center text-sm text-slate-500 mt-6">
            Don't have an account?{" "}
            <button
              onClick={() => setregister(true)}
              className="text-green-600 font-semibold hover:underline transition-colors"
            >
              Register
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserLogin;

// //in LS data is stored in key value pair where key and value both
// // are strings
// import React, { useEffect } from 'react'
// import axios from 'axios'
// import { loginURL, infoURL } from '../../../helpers/ImportantRoutes'

// import { useState } from 'react'
// import UserRegister from './UserRegister'
// const UserLogin = ({updateReloadState}) => {
//     const [email, setemail] = useState("")
//     const [register, setregister] = useState(false)
//     const [password, setpassword] = useState("")
//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             const getData = await axios.post(loginURL,{email : email, password: password});
//             const token = getData.data
//             localStorage.setItem("Authorization", "Bearer " + token.accessToken)
//             setemail("");
//             setpassword("");
//             updateReloadState();

//         } catch (error) {
//             alert("Invalid Cred")
//         }
//     }

//   return (
//     <> {register ? <UserRegister updateReloadState = {updateReloadState}/>:
//     <div className='Login-Container h-auto'>
//     <div className='flex h-[90vh] w-full items-center justify-center flex-col'>
//         <form onSubmit={handleSubmit}className='flex bg-gradient-to-r from-slate-100 to-slate-200 w-[40%] p-8 shadow-xl border rounded-xl  items-center flex-col' action="">
//         <h3 className='font-bold text-green-600 mb-5 text-2xl'>User Login</h3>
//             <label className='text-left text-green-600 font-serif w-full p-1' htmlFor="">email</label>
//             <input className='w-full p-2 m-1 h-9 placeholder:text-gray-500 border rounded-md' value={email} onChange={(e) => setemail(e.target.value)} id='email' required type="text" placeholder='Enter your Email'/>
//             <label className='text-left text-green-600 mt-1 font-serif w-full p-1' htmlFor="">password</label>
//             <input className='w-full p-2 m-1 h-9 placeholder:text-gray-500 border rounded-md' onChange={(e) => setpassword(e.target.value)} value={password} id='password' required type="password" placeholder='Enter your password'/>
//             <button className='border rounded-lg p-2 m-2 mt-6 bg-green-500 transition duration-300 ease-in-out transform hover:scale-105 text-lg w-40 shadow-md font-bold' type='submit'>Login</button>
//         </form>
//         <div>
//         <p> Don't have an account? <button className='text-blue-600' onClick={() => {setregister(!register)}}>register</button></p>
//     </div>
//     </div>

// </div>}
//     </>
//   )
// }

// export default UserLogin
