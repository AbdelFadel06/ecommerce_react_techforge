// import { useEffect } from 'react'
import LoginPage from './pages/Login'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import DetailsProduct from './pages/Detail_product'

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LoginPage />} />
                <Route path="/home" element={<Home />} />
                <Route path="/product/:id" element={<DetailsProduct />} />
            </Routes>
        </Router>
    )
}

export default App
