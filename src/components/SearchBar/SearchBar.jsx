import React, {useState}from "react";
import { GoSearch } from "react-icons/go";
import './SearchBar.css';
//import "../../Pages/Dashboard/index.css"
import CartButton from "../CartButton/CartButton";

function SearchBar() {
    const [searchValue, setSearchValue ] = useState ('')

    return (
        
    <form className="busca">
        <input
           type="search" 
           value={searchValue}
           placeholder="Buscar produtos" 
           className="search__input" 
           onChange={(target) => setSearchValue(target.value)}
        />
         <button type="submit" className="search__button">
             <GoSearch/>
             </button>
             <CartButton/>
        
    </form>

    )
}

export default SearchBar;