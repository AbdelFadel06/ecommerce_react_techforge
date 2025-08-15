// import ProductCard from "./ProductCard"
// import productsData from "../data/productsData.json"

// const ProductList = ()=>{
//     return(
//         <div className="container mx-auto max-w-7xl space-y-10 mb-20">
//             <h1 className="text-center text-4xl text-gray-800 font-bold">Nos Produits</h1>
//             <div className="grid grid-cols-4 gap-10">
                
//                 {
//                     productsData.products.map(product=>
//                         <ProductCard key={ product.id} product={product} />
//                     )
//                 }
//             </div>
        
//         </div>
//     )
// }

// export default ProductList


import ProductCard from "./ProductCard"

const ProductList = ({ products }) => {
    return(
        <div className="grid grid-cols-4 gap-10">
            {products.map(product =>
                <ProductCard key={product.id} product={product} />
            )}
        </div>
    )
}

export default ProductList