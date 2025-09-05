import { useEffect } from 'react'
import Navbar from '../components/Navbar'
import ProductList from '../components/ProductList'

const Home = () => {
    useEffect(() => {
        document.title = 'Ecommerce - Accueil'
    }, [])

    return (
        <div className="w-full space-y-10">
            <Navbar />
            <ProductList />
        </div>
    )
}

export default Home
