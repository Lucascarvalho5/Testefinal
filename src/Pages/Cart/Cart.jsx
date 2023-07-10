import React, { useState } from "react";
import { getItem, setItem } from "../Services/LocalStorage";
import {BsFillCartDashFill} from 'react-icons/bs';
import './Cart.css';

export const Cart = () => {
   const [Loj, setLoj] = useState(getItem('carrinhoYT')  || [])
   const excluirItem = (loja) => {
        const arrFilter = Loj.filter((item) =>item.id !== loja.id)
        setLoj(arrFilter)
        setItem ('carrinhoYT',arrFilter)
   }

   const subTotal = Loj.reduce((acc,cur) => acc + cur.preco, 0)
     

   return(
    
      <div className="cart">
        <header>
      <h1>Carrinho</h1>
      <h3>{`subTotal: R$ ${subTotal}`}</h3>
      </header>
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
           < button className="remove" onClick={()=> excluirItem(item)}>
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