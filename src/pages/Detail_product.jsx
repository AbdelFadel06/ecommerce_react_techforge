import { useParams } from "react-router-dom"

import productData from "../data/productsData.json"
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Return from "../components/return";

const DetailsProduct = () => {

    const {id} = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
    const foundProduct = productData.products.find(p => p.id === parseInt(id));
    setProduct(foundProduct);
  }, [id]);

  if (!product) return <div>Chargement...</div>;

 
    return(
        <div>
            
            <Navbar/>
            <Return/>

            <div className="flex max-w-7xl mx-auto container ">
                
                <div className="w-[40%]  p-10">
                    <img className="w-full" src={product.image_url} alt="" />
                </div>
                <div className="p-10 space-y-10 items-center">
                    <h1 className="text-3xl font-bold">{product.name}</h1>
                    <h1 className="text-2xl font-medium">{product.category}</h1>
                    <p className="">{product.description}</p>
                    <h1> USD {product.price} $</h1>
                    <div className="">
                       
                    </div>
                    <h1 className={` text-xl ${product.availability==="IN_STOCK" ? 'text-green-700' : 'text-red-700' }`}> {product.availability === 'IN_STOCK' ? 'En stock' : 'Rupture'}</h1>

                    {
                        Array(5).fill(0).map((_, i) => (
      <span key={i} className={i < product.stars ? 'text-yellow-400' : 'text-gray-300'}>
        ★
      </span>))
                    }
                </div>
            
            </div>
        </div>
    )
}

export default DetailsProduct