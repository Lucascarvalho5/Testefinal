import { useState } from "react";
//import { AuthContext } from "../../contexts/auth";
import Loja from '../../mock/index.json'



//const {logout} = useContext(AuthContext);
            
function Dashboard() {

  // const {products, loja, setProducts, loading, setLoading} = useState([Loja]);
const [{ loja }] = useState(Loja);
   return (
     <div>
       <h1>CONTEXTAPI</h1>
       <ul>
         {loja.map((item)=>{
           return (
             <li key={item.id}>
               <h2>{item.nome}</h2>
               <img src={item.imagens[0].url} width={200} height={150} alt={item.nome}/>
               <button>{item.preco}</button>
             </li>
           )
         })}
       </ul>
     </div>
   )
        };

export default Dashboard;