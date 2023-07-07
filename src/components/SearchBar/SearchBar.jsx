import React, {useState}from "react";
import { GoSearch } from "react-icons/go";

//import "../../Pages/Dashboard/index.css"
import CartButton from "../CartButton/CartButton";

function SearchBar() {
    const [searchValue, setSearchValue ] = useState ('')

    return (
        
    <form>
        <input
           type="search" 
           value={searchValue}
           placeholder="Buscar produtos" 
           className="search__input" 
           onChange={(target) => setSearchValue(target.value)}
        />
         <button type="submit" className="search__button">
             <GoSearch/>
             <CartButton/>
          </button>
        
    </form>

    )
}

export default SearchBar;