import React, {useState}from "react";
import './SearchBar.css';
import CartButton from "../CartButton/CartButton";
import fetchProducts from "../../api/fetchProducts";
import { Link } from "react-router-dom";


function SearchBar() {
    const [searchValue] = useState ('')
    const handleSearch = async (event) => {
      event.preventDefault();
      const produto = await fetchProducts(searchValue);
      console.log(produto)
    }

    return (
    <div >
      <header>
      <h2>Infra Shop</h2>
      <button>
      <Link to="/carrinho">Seu carrinho</Link>
      </button>
      </header>
   </div>
    )
}

export default SearchBar;