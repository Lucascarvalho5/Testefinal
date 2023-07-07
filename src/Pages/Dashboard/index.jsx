import { useState } from "react";
//import { useState } from "react";
//import { AuthContext } from "../../contexts/auth";
import Loja from '../../mock/index.json'
import './index.css';
import SearchBar from "../../components/SearchBar/SearchBar";
import {BsCartCheck} from "react-icons/bs"; 


//const {logout} = useContext (AuthContext);
// const {products, loja, setProducts, loading, setLoading} = useState([Loja]);

function Dashboard() {

  
const [{ loja }] = useState(Loja);

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
               
               <img src={item.imagens[0].url} width={200} height={150} alt={item.nome}/>
               <h2>{item.nome}</h2>
               <p>{item.preco.toLocaleString('pt-br', {
                style: 'currency',
                currency: 'BRL',
               })}</p>
               <button className="btn_car"><BsCartCheck/> </button>
               </div>
             </li>
           )
         })}
         </ul>
     </div>
   )
        };

export default Dashboard;