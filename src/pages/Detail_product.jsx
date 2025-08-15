import { useParams } from 'react-router-dom'

import productData from '../data/productsData.json'
import { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Return from '../components/return'

const DetailsProduct = () => {
    const { id } = useParams()
    const [product, setProduct] = useState(null)

    useEffect(() => {
        document.title = 'Ecommerce - DetailProduct'

        const foundProduct = productData.products.find(p => p.id === parseInt(id))
        setProduct(foundProduct)
    }, [id])

    if (!product) return <div>Chargement...</div>

    return (
        <div>
            <Navbar />
            <Return />

            <div className="max-w-7xl mx-auto container p-4">
                <div className="flex flex-col md:flex-row md:space-x-10">
                    <div className="md:w-2/5 w-full p-4">
                        <img
                            className="w-full h-auto rounded-lg object-cover"
                            src={product.image_url}
                            alt={product.name}
                        />
                    </div>

                    <div className="flex-1 p-4 space-y-6">
                        <h1 className="text-3xl font-bold">{product.name}</h1>
                        <h2 className="text-2xl font-medium text-gray-600">{product.category}</h2>
                        <p className="text-gray-700">{product.description}</p>
                        <h3 className="text-xl font-semibold">USD {product.price} $</h3>

                        <h4
                            className={`text-xl ${
                                product.availability === 'IN_STOCK'
                                    ? 'text-green-700'
                                    : 'text-red-700'
                            }`}
                        >
                            {product.availability === 'IN_STOCK' ? 'En stock' : 'Rupture'}
                        </h4>

                        <div className="flex space-x-1">
                            {Array(5)
                                .fill(0)
                                .map((_, i) => (
                                    <span
                                        key={i}
                                        className={
                                            i < product.stars ? 'text-yellow-400' : 'text-gray-300'
                                        }
                                    >
                                        ★
                                    </span>
                                ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DetailsProduct
