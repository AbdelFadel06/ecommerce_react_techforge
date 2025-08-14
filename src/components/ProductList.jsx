import ProductCard from "./ProductCard"

const ProductList = ()=>{
    return(
        <div className="container mx-auto max-w-7xl space-y-10">
            <h1 className="text-center text-4xl text-gray-800 font-bold">Nos Produits</h1>
            <div className="grid grid-cols-4 gap-10">
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
            </div>
        
        </div>
    )
}

export default ProductList