import { useEffect } from 'react'
import Navbar from '../components/Navbar'
import ProductsPage from '../pages/ProductsPage'

const Home = () => {
    useEffect(() => {
        document.title = 'Ecommerce - Accueil'
    }, [])

    return (
        <div className="w-full space-y-10">
            <Navbar />
            <ProductsPage />
        </div>
    )
}

export default Home
