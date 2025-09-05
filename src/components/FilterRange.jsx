import productData from '../data/productsData.json'

import { useEffect, useState } from 'react'

const Filter = ({ onFilter }) => {
    const [filters, setFilters] = useState({
        name: '',
        category: '',
        status: '',
    });

    const [categories, setCategories] = useState([])

    useEffect(() => {
        const uniqueCategorie = [...new Set(productData.products.map(product => product.category))]
        setCategories(['Toutes les categories', ...uniqueCategorie])
    }, [])

    const statusOptions = [
        { label: 'Tous les statuts', value: '' },
        { label: 'En stock', value: 'IN_STOCK' },
        { label: 'Terminé', value: 'OUT_OF_STOCK' },
    ]

    const handleInputChange = e => {
        const { name, value } = e.target
        setFilters(prev => ({
            ...prev,
            [name]: value,
        }))
    }

    const handleSubmit = e => {
        e.preventDefault()
        if (filters.name || filters.category || filters.status) {
            onFilter(filters)
        } else {
            onFilter({
                name: '',
                category: '',
                status: '',
            })
        }
    }

    const handleReset = () => {
        setFilters({
            name: '',
            category: '',
            status: '',
        })
        onFilter({
            name: '',
            category: '',
            status: '',
        })
    }

    return (
       <form
    onSubmit={handleSubmit}
    className="   w-[75%] mx-auto grid grid-cols-1 md:grid-cols-5 gap-4 p-4 bg-white rounded-lg shadow"
>
    <input
        name="name"
        value={filters.name}
        onChange={handleInputChange}
        className="bg-gray-100 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
        type="text"
        placeholder="Filtrer par nom"
    />

    <select
        name="category"
        value={filters.category}
        onChange={handleInputChange}
        className="bg-gray-100 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
    >
        {categories.map((cat, index) => (
            <option key={index} value={index === 0 ? '' : cat}>
                {cat}
            </option>
        ))}
    </select>

    <select
        name="status"
        value={filters.status}
        onChange={handleInputChange}
        className="bg-gray-100 px-4 py-2 border border-gray-300 rounded-lg"
    >
        {statusOptions.map((option, index) => (
            <option key={index} value={option.value}>
                {option.label}
            </option>
        ))}
    </select>

    <button
        type="submit"
        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
    >
        Appliquer
    </button>

    <button
        type="button"
        onClick={handleReset}
        className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition"
    >
        Réinitialiser
    </button>
</form>


    )
}

export default Filter
