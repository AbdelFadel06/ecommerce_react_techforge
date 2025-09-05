import { useEffect, useState } from 'react'
import productData from '../data/productsData.json'

const Filter = ({onFilterChange}) => {


    const [filters, setFilters] = useState({
        name: '',
        category: '',
        status: ''
    });

    const [categories, setCategories] = useState([])

    const statusOptions = [
        { label: 'Tous les status', value: '' },
        { label: 'En stock', value: 'IN_STOCK' },
        { label: 'Terminer', value: 'OUT_OF_STOCK' },
    ]

    useEffect(() => {
        const uniqueCategory = [...new Set(productData.products.map(product => product.category))]
        setCategories(['Toutes les categories', ...uniqueCategory])
    }, []);

     useEffect(() => {
        onFilterChange(filters);
    }, [filters, onFilterChange]);

    const HandleChange = (e) => {
        const { name, value } = e.target;
        setFilters(prev => ({
            ...prev,
            [name]: value
        }));
    };


    const HandleReset = () => {
        setFilters({
            name: '',
            category: '',
            status: ''
        });
    };

    return (
        <div className=" flex justify-center space-x-8">
            <input
                className="bg-gray-100 py-1 px-2 rounded-xl border border-gray-300"
                name='name'
                type="text"
                placeholder=" Rechercher avec le nom ... "
                value={filters.name}
                onChange={HandleChange}
            />
            <select
                className="bg-gray-100 py-1 px-2 rounded-xl border border-gray-300"
                name="category"
                id=""
                value={filters.category}
                onChange={HandleChange}
            >
                {categories.map((category, index) => (
                    <option key={index} value={index === 0 ? '' : category}>
                        {category}
                    </option>
                ))}
            </select>
            <select
                className="bg-gray-100 py-1 px-2 rounded-xl border border-gray-300"
                name="status"
                id=""
                value={filters.status}
                onChange={HandleChange}
            >
                {statusOptions.map((stat, index) =>

                    <option key={index} value={stat.value}>
                        {stat.label}
                    </option>

                )}
            </select>

            <button className="bg-blue-600 text-white py-1 px-2 rounded-xl border border-gray-300" onClick={HandleReset}>
                Reset
            </button>
        </div>
    )
}

export default Filter
