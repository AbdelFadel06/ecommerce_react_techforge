
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


                        {/* <svg className="text-gray-700" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-star-icon lucide-star"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"/></svg> */}
                    </div>
                    <h1 className={`flex justify-end ${Availability[product.availability].color} `} >{Availability[product.availability].text}</h1>
                </div>
            </div>
        
        </>
    )
}
export default ProductCard