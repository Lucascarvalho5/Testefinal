import { useState } from "react";
import Loja from '../../mock/index.json'
import './index.css';
import SearchBar from "../../components/SearchBar/SearchBar";
import { getItem, setItem } from "../Services/LocalStorage";
import{BsFillCartPlusFill, BsFillCartCheckFill} from 'react-icons/bs'

function Dashboard() {

const [{ loja }] = useState(Loja);
const [ cart, setCart] = useState(getItem('carrinhoYT') ||[])


const handleClick = (Loja) => {

  const element = cart.find((item) => item.id === Loja.id)
  if(element) {
    const arrFilter =cart.filter((item) => item.id !== Loja.id)
    setCart(arrFilter)
    setItem('carrinhoYT', arrFilter)
  } else{
    setCart([...cart, Loja])
    setItem('carrinhoYT', [...cart, Loja])
  }
}

   return (
    <div className="dashboard" >
    <header >
      <SearchBar/>
      </header>

      <ul className="produto" >
         {loja.map((item)=>{
           return (
             <li className='product' key={item.id}>
              <div className="product_item">
               
               <img src={item.imagens[0].url} width={200} height={150} title={item.descricao} alt={item.nome}/>
               <h2>{item.nome} </h2>
               <p>{item.preco.toLocaleString('pt-br', {
                style: 'currency',
                currency: 'BRL',
               })}</p>
              <button className="addcart" 
        onClick={() =>  handleClick(item) }
       >
        {
                cart.some((itemCart) => itemCart.id === item.id)? (
                  <BsFillCartCheckFill/>
                ) :(
                  <BsFillCartPlusFill/>
                )

              }
        </button>
              
          
        
               
               </div>
             </li>
           )
         })}
         </ul>
         <footer>Todos os direitos reservados </footer>
     </div>
   )  
        };
        

export default Dashboard;