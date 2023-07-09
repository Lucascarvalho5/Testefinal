import React, { useState } from "react";
import { Link } from "react-router-dom";
import {Route, Routes} from 'react-router-dom';
import { getItem, setItem } from "../Services/LocalStorage";
import {BsFillCartDashFill} from 'react-icons/bs';

export const Cart = () => {
   const [Loj, setLoj] = useState(getItem('carrinhoYT')  || [])
   const excluirItem = (loja) => {
        const arrFilter = Loj.filter((item) =>item.id !== loja.id)
        setLoj(arrFilter)
        setItem ('carrinhYT',arrFilter)
   }


   return(
      <div>
      <h1>Carrinho</h1>
      <div>
        {
          Loj.map((item) => (
          <div key={ item.id}>
          <h4>{item.nome}</h4>
          <img src={item.imagens[0].url} width={200} height={150} alt={item.id} />
          <p>{item.preco.toLocaleString('pt-br', {
                style: 'currency',
                currency: 'BRL',
               })}</p>
           < button onClick={()=> excluirItem(item)}>
           <BsFillCartDashFill/>
           </button>
            </div>
          ))
        
        }
        </div>
          </div>
    
  )
}

export default Cart;