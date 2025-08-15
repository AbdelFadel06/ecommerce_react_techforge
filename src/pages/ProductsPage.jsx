

import { useState } from 'react';
import Filter from '../components/FilterRange';
import ProductList from '../components/ProductList';
import productsData from '../data/productsData.json';

const ProductsPage = () => {
  const [filteredProducts, setFilteredProducts] = useState(productsData.products);

  const handleFilter = (filters) => {
    const filtered = productsData.products.filter(product => {

      const nameMatch = product.name.toLowerCase().includes(filters.name.toLowerCase());
      
      const categoryMatch = !filters.category || product.category === filters.category;
      
      const statusMatch = !filters.status || 
            (filters.status === "IN_STOCK" && product.availability === "IN_STOCK") ||
            (filters.status === "OUT_OF_STOCK" && product.availability === "OUT_OF_STOCK");
              

          return nameMatch && categoryMatch && statusMatch;
        });
    
    setFilteredProducts(filtered);
  };

  return (
    <div className="container mx-auto max-w-7xl space-y-10 mb-20">
      <h1 className="text-center text-4xl text-gray-800 font-bold">Nos Produits</h1>
      <Filter onFilter={handleFilter} />
      <ProductList products={filteredProducts} />
    </div>
  );
};

export default ProductsPage;