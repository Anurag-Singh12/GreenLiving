import React, { useState } from "react";
import axios from "axios";
import { loginURL, registerURL } from "../../../helpers/ImportantRoutes";
import UserLogin from "./UserLogin";

const UserRegister = ({ updateReloadState }) => {
  const [email, setemail] = useState("");
  const [UserName, setUserName] = useState("");
  const [password, setpassword] = useState("");
  const [register, setregister] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg("");
    setLoading(true);

    // Step 1: Register
    try {
      await axios.post(registerURL, { username: UserName, email, password });
    } catch (error) {
      const msg =
        error.response?.data?.message || error.message || "Registration failed";
      setErrorMsg(
        error.response?.status === 409
          ? "Email already in use. Try logging in."
          : "Error: " + msg,
      );
      setLoading(false);
      return;
    }

    // Step 2: Auto-login
    try {
      const getData = await axios.post(loginURL, { email, password });
      localStorage.setItem(
        "Authorization",
        "Bearer " + getData.data.accessToken,
      );
      setemail("");
      setpassword("");
      setUserName("");
      updateReloadState();
    } catch (error) {
      setErrorMsg(
        "Registered! But auto-login failed — please log in manually.",
      );
    }

    setLoading(false);
  };

  if (register) return <UserLogin updateReloadState={updateReloadState} />;

  return (
    <div className="min-h-[90vh] w-full flex items-center justify-center px-4 bg-linear-to-br from-slate-50 via-white to-green-50/30">
      {/* background blobs */}
      <div className="fixed top-20 right-1/3 w-80 h-80 rounded-full bg-green-100/40 blur-3xl pointer-events-none" />
      <div className="fixed bottom-10 left-1/4 w-64 h-64 rounded-full bg-emerald-100/30 blur-3xl pointer-events-none" />

      <div className="relative z-10 w-full max-w-md">
        {/* Card */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl shadow-green-100/50 border border-green-100/60 p-8 md:p-10">
          {/* Header */}
          <div className="flex flex-col items-center mb-8">
            <div className="w-14 h-14 rounded-2xl bg-green-50 border border-green-100 flex items-center justify-center text-2xl mb-4 shadow-sm">
              🌱
            </div>
            <h2 className="text-2xl font-bold text-slate-800">
              Create account
            </h2>
            <p className="text-slate-500 text-sm mt-1">
              Join the sustainable living community
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
                htmlFor="reg-username"
              >
                Username
              </label>
              <input
                id="reg-username"
                type="text"
                required
                value={UserName}
                onChange={(e) => setUserName(e.target.value)}
                placeholder="Choose a username"
                className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50/60 placeholder:text-slate-400 text-slate-800 focus:outline-none focus:ring-2 focus:ring-green-400/50 focus:border-green-400 transition-all duration-200"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label
                className="text-sm font-semibold text-slate-600"
                htmlFor="reg-email"
              >
                Email
              </label>
              <input
                id="reg-email"
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
                htmlFor="reg-password"
              >
                Password
              </label>
              <input
                id="reg-password"
                type="password"
                required
                value={password}
                onChange={(e) => setpassword(e.target.value)}
                placeholder="Create a password"
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
                  Creating account...
                </span>
              ) : (
                "Create Account"
              )}
            </button>
          </form>

          {/* Switch to login */}
          <p className="text-center text-sm text-slate-500 mt-6">
            Already have an account?{" "}
            <button
              onClick={() => setregister(true)}
              className="text-green-600 font-semibold hover:underline transition-colors"
            >
              Sign in
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserRegister;

// import React, { useState } from 'react'
// import axios from 'axios'
// import { loginURL, registerURL } from '../../../helpers/ImportantRoutes'
// import UserLogin from './UserLogin'

// const UserRegister = ({ updateReloadState }) => {
//     const [email, setemail] = useState("")
//     const [UserName, setUserName] = useState("")
//     const [register, setregister] = useState(false)
//     const [password, setpassword] = useState("")
//     const [errorMsg, setErrorMsg] = useState("")
//     const [loading, setLoading] = useState(false)

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         setErrorMsg("")
//         setLoading(true)

//         // Step 1: Register
//         try {
//             const createUser = await axios.post(registerURL, {
//                 username: UserName, email: email, password: password
//             });
//             console.log("Register success:", createUser.data);
//         } catch (error) {
//             console.error("Register failed:", error.response?.data);
//             const msg = error.response?.data?.message || error.message || "Registration failed"
//             if (error.response?.status === 409) {
//                 setErrorMsg("Email already in use. Try logging in.")
//             } else {
//                 setErrorMsg("Register error: " + msg)
//             }
//             setLoading(false)
//             return;
//         }

//         // Step 2: Login after successful registration
//         try {
//             const getData = await axios.post(loginURL, { email: email, password: password });
//             console.log("Login success:", getData.data);
//             const token = getData.data
//             localStorage.setItem("Authorization", "Bearer " + token.accessToken)
//             setemail("")
//             setpassword("")
//             setUserName("")
//             updateReloadState()
//         } catch (error) {
//             console.error("Login after register failed:", error.response?.data);
//             setErrorMsg("Registered successfully but login failed. Please try logging in manually.")
//         }

//         setLoading(false)
//     }

//     return (
//         <>
//             {register ? <UserLogin /> :
//                 <div className='Login-Container h-auto'>
//                     <div className='flex h-[90vh] w-full shadow-lg items-center justify-center flex-col'>
//                         <form onSubmit={handleSubmit} className='flex bg-linear-to-r from-slate-100 to-slate-200 w-[40%] p-8 shadow-xl border rounded-xl items-center flex-col'>
//                             <h3 className='font-bold mb-5 text-green-600 text-2xl'>User Registration</h3>

//                             {errorMsg && (
//                                 <div className='w-full mb-3 p-2 bg-red-100 border border-red-400 text-red-700 rounded-md text-sm text-center'>
//                                     {errorMsg}
//                                 </div>
//                             )}

//                             <label className='text-left text-green-600 font-serif w-full p-1' htmlFor="username">username</label>
//                             <input className='w-full p-2 m-1 h-9 placeholder:text-gray-500 border rounded-md' value={UserName} onChange={(e) => setUserName(e.target.value)} id='username' required placeholder='Enter Your username' type="text" />

//                             <label className='text-left text-green-600 font-serif w-full p-1' htmlFor="email">email</label>
//                             <input className='w-full p-2 m-1 h-9 placeholder:text-gray-500 border rounded-md' value={email} onChange={(e) => setemail(e.target.value)} id='email' required type="text" placeholder='Enter your Email' />

//                             <label className='text-left text-green-600 font-serif w-full p-1' htmlFor="password">password</label>
//                             <input className='w-full p-2 m-1 h-9 placeholder:text-gray-500 border rounded-md' onChange={(e) => setpassword(e.target.value)} value={password} id='password' required type="password" placeholder='Enter your password' />

//                             <button
//                                 className='border rounded-lg p-2 m-2 bg-green-500 mt-6 transition duration-150 ease-in-out transform hover:scale-105 text-lg w-40 shadow-md font-bold disabled:opacity-50 disabled:cursor-not-allowed'
//                                 type='submit'
//                                 disabled={loading}
//                             >
//                                 {loading ? "Registering..." : "Register"}
//                             </button>
//                         </form>

//                         <div>
//                             <p>Already have an account? <button className='text-blue-600' onClick={() => { setregister(!register) }}>Login</button></p>
//                         </div>
//                     </div>
//                 </div>
//             }
//         </>
//     )
// }

// export default UserRegister
