
import { useNavigate } from "react-router-dom";



const ProductCard = ( {product}) =>{
    const Availability = {
        IN_STOCK: {text: "En stock", color:" text-green-700"},
        OUT_OF_STOCK:{ text:"Terminer", color:" text-red-700"}
    }

    const renderStars = () => {
    return Array(5).fill(0).map((_, i) => (
      <span key={i} className={i < product.stars ? 'text-yellow-400' : 'text-gray-300'}>
        ★
      </span>
    ));
  };
  const navigate = useNavigate();

  const handleClick = ()=>{
    navigate(`/product/${product.id}`) 
  }


    return (
        <>
            

            <div className="w-[300px] rounded-2xl bg-white shadow-md" onClick={handleClick}>
                <div>
                    <img src={product.image_url} className="w-full h-[350px] rounded-t-2xl" alt="" />
                </div>
                <div className="p-3 space-y-2 text-gray-700">
                    <h1 className="text-xl font-medium text-gray-700">{product.name}</h1>
                    <div className="flex justify-between">
                        <h1 className="font-medium">
                            {product.category}
                        </h1>
                        <h1 className="font-medium text-xl text-gray-700"> USD {product.price} $  </h1>
                    </div>
                    <div className="flex justify-center">

                        {renderStars()}


                    </div>
                    <h1 className={`flex justify-end ${Availability[product.availability].color} `} >{Availability[product.availability].text}</h1>
                </div>
            </div>
        
        </>
    )
}
export default ProductCard