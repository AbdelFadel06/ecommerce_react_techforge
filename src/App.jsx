// import { useEffect } from 'react'
// import './App.css'
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// import Home from './pages/Home'
// import DetailsProduct from './pages/Detail_product'
// // import { useState } from 'react'

// function App() {
//   // const [isAuth, setIsAuth] = useState(false);
//     return (
//         <Router>
//             <Routes>
//                 <Route path="/" element={<LoginPage  />} />
//                 <Route path="/home" element={<Home />} />
//                 <Route path="/product/:id" element={<DetailsProduct />} />
//             </Routes>
//         </Router>
//     )
// }

// export default App



import LoginPage from './pages/Login'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import DetailsProduct from './pages/Detail_product'

import { AuthProvider } from './auth/AuthContext'
import ProtectedRoute from './auth/ProtectedRoute'
import PublicRoute from './auth/PublicRoute'

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route element={<PublicRoute />}>
            <Route path="/" element={<LoginPage />} />
          </Route>

          <Route element={<ProtectedRoute />}>
            <Route path="/home" element={<Home />} />
            <Route path="/product/:id" element={<DetailsProduct />} />
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  )
}

export default App

