// import { useEffect, useState } from 'react'
// import { Navigate, useNavigate } from 'react-router-dom'

// const LoginPage = () => {
//     const [username, setUserName] = useState('')
//     const [password, setPassword] = useState('')
//     const [error, setError] = useState('')
//     const navigate = useNavigate()

//     function handleLogin(e) {
//         e.preventDefault()
//         const storedUserName = 'Abdel SALIOU'
//         const storedPassword = 'abdel'

//         if (username === storedUserName && password === storedPassword) {
//             localStorage.setItem('username', storedUserName)
//             navigate('/home')
//         } else {
//             setError('Username ou Mot de Passe incorrecte')
//         }
//     }

//     useEffect(() => {
//         document.title = 'Ecommerce - Login'
//     }, [])

//     return (
//         <>
//             <div className="bg-[#A7D7C5] min-h-screen flex items-center justify-center">
//                 <form
//                     className="bg-[#F6FBF9] w-[80%] max-w-sm p-6 sm:p-8 rounded-2xl text-center shadow"
//                     onSubmit={handleLogin}
//                 >
//                     <h1 className="text-2xl font-bold mb-2">Login</h1>
//                     <p className="text-sm mb-6 text-gray-600">
//                         Login to your account to enjoy all the services without any ads for free
//                     </p>

//                     <input
//                         type="text"
//                         placeholder="Username"
//                         value={username}
//                         onChange={e => setUserName(e.target.value)}
//                         className="w-[90%] mb-4 px-3 py-2 rounded border border-[#0000001A] outline-none"
//                     />

//                     <input
//                         type="password"
//                         placeholder="Password"
//                         value={password}
//                         onChange={e => setPassword(e.target.value)}
//                         className="w-[90%] mb-4 px-3 py-2 rounded border border-[#0000001A] outline-none"
//                     />

//                     {error && <p className="text-red-500 mb-4 text-sm">{error}</p>}

//                     <button
//                         className="w-1/2 py-3 bg-[#84C7AE] text-white text-lg font-medium rounded cursor-pointer hover:bg-[#6bbfa1] transition"
//                         type="submit"
//                     >
//                         Log In
//                     </button>

//                     <p className="mt-6 text-sm text-gray-700">
//                         Already Have An Account?
//                         <a href="#" className="text-blue-600 hover:underline">
//                             Sign In
//                         </a>
//                     </p>
//                 </form>
//             </div>
//         </>
//     )
// }

// export default LoginPage


import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from '../auth/AuthContext'

const LoginPage = () => {
  const [username, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()
  const location = useLocation()
  const { login } = useAuth()

  const from = location.state?.from?.pathname || '/home'

  function handleLogin(e) {
    e.preventDefault()

    if (!username.trim() || !password.trim()) {
      setError('Veuillez remplir tous les champs')
      return
    }

    const { ok, message } = login({ username, password })
    if (ok) {
      navigate(from, { replace: true })
    } else {
      setError(message || 'Échec de connexion')
    }
  }

  useEffect(() => {
    document.title = 'Ecommerce - Login'
  }, [])

  return (
    <>
      <div className="bg-[#A7D7C5] min-h-screen flex items-center justify-center">
        <form
          className="bg-[#F6FBF9] w-[80%] max-w-sm p-6 sm:p-8 rounded-2xl text-center shadow"
          onSubmit={handleLogin}
        >
          <h1 className="text-2xl font-bold mb-2">Login</h1>
          <p className="text-sm mb-6 text-gray-600">
            Login to your account to enjoy all the services without any ads for free
          </p>

          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={e => setUserName(e.target.value)}
            className="w-[90%] mb-4 px-3 py-2 rounded border border-[#0000001A] outline-none"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            className="w-[90%] mb-4 px-3 py-2 rounded border border-[#0000001A] outline-none"
          />

          {error && <p className="text-red-500 mb-4 text-sm">{error}</p>}

          <button
            className="w-1/2 py-3 bg-[#84C7AE] text-white text-lg font-medium rounded cursor-pointer hover:bg-[#6bbfa1] transition"
            type="submit"
          >
            Log In
          </button>

          <p className="mt-6 text-sm text-gray-700">
            Already Have An Account?
            <a href="#" className="text-blue-600 hover:underline">Sign In</a>
          </p>
        </form>
      </div>
    </>
  )
}

export default LoginPage
