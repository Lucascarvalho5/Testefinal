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
    <header >
      <SearchBar/>
      <ul>
         {loja.map((item)=>{
           return (
             <li key={item.id}>
               <h2>{item.nome}</h2>
               <h1>{item.preco.toLocaleString('pt-br', {
                style: 'currency',
                currency: 'BRL',
               })}</h1>
               <img src={item.imagens[0].url} width={200} height={150} alt={item.nome}/>
               <button className="btn_car"><BsCartCheck/> </button>
             </li>
           )
         })}
       </ul>
 
     </header>
   )
        };

export default Dashboard;