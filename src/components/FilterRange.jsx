

const Filter = ()=> {
    return (
        <div className="flex justify-center space-x-6 p-10 ">

            <input className="bg-gray-200 px-4 py-2 border border-gray-500 rounded-2xl" type="text" placeholder="Filtrer par le nom"/>

            <select name="categorie" id="">
                <option value="">Toutes les categories</option>
                <option value="">Collant</option>
                <option value="">T-shirt</option>
            </select>

            <select name="status" id="">
                <option value="">En stock</option>
                <option value="">Terminer</option>
                
            </select>

            
        
        </div>
    )
}

export default Filter