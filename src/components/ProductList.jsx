import ProductCard from './ProductCard'
import Filter from './Filter'
import productsData from '../data/productsData.json'
import { useEffect, useState } from 'react'
import axios from 'axios'

const ProductList = () => {
    const [filteredProducts, setFilteredProducts] = useState(productsData.products)

    const handleFilterChange = filters => {
        const filtered = productsData.products.filter(product => {
            const nameMatch = product.name.toLowerCase().includes(filters.name.toLowerCase())

            const categoryMatch = !filters.category || product.category === filters.category

            const statusMatch =
                !filters.status ||
                (filters.status === 'IN_STOCK' && product.availability === 'IN_STOCK') ||
                (filters.status === 'OUT_OF_STOCK' && product.availability === 'OUT_OF_STOCK')

            return nameMatch && categoryMatch && statusMatch
        })

        setFilteredProducts(filtered)
    }


    // charger les donnee depuis une api avec axios

    const [products, setProducts] = useState();
    const fetchData = async () => {
      const response = await       axios('https://fakestoreapi.com/products')
      setProducts(response.data);
    }

    useEffect(()=>{
      fetchData();
    },[])

    return (
        <div className="container mx-auto max-w-7xl space-y-10 mb-20">
            <h1 className="text-center text-4xl text-gray-800 font-bold">Nos Produits</h1>
            <Filter onFilterChange={handleFilterChange} />
            <div className="grid grid-cols-1 p-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
                {filteredProducts.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}

                {filteredProducts.length === 0 && (
                    <div className="col-span-full text-center py-10">
                        <p className="text-gray-500">
                            Aucun produit ne correspond à vos critères de recherche
                        </p>
                    </div>
                )}
            </div>
        </div>
    )
}

export default ProductList
