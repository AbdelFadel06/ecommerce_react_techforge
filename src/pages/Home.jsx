import Navbar from "../components/Navbar"
import Filter from "../components/FilterRange"
import ProductList from "../components/ProductList"


const Home = () => {
    return(
        <div className="w-full">
            <Navbar/>
            <Filter/>
            <ProductList/>

        </div>
    )
}

export default Home