import React, {useState}from "react";
import { GoSearch } from "react-icons/go";
import './SearchBar.css';
//import "../../Pages/Dashboard/index.css"
import CartButton from "../CartButton/CartButton";
import fetchProducts from "../../api/fetchProducts";
import {BsCartCheck} from "react-icons/bs";
import { Link } from "react-router-dom";


function SearchBar() {
    const [searchValue, setSearchValue ] = useState ('')
    const handleSearch = async (event) => {
      event.preventDefault();
      const produto = await fetchProducts(searchValue);
      console.log(produto)
    }

    return (
        
    <header
    ><div  className="cart__button">
    <button type="submit" to={'/carrinho'} className="btn_cart">
    <Link className="nav-link" to='/carrinho'>Carrinho</Link>
   
    </button>
      </div>
</header>

    )
}

export default SearchBar;