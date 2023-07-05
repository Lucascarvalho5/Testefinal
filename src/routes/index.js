import {Route, Routes} from 'react-router-dom';


import SignUp from '../Pages/Signup'
import Dashboard from '../Pages/Dashboard';
import PrivateOutlet from './PrivateOutlet';

const Rotas = () => {
     return (
        <Routes>
             <Route path="/dashboard" element={<PrivateOutlet/>}>
            <Route path="/dashboard" element={<Dashboard />} />
             </Route>
             <Route path="/" element={<SignUp/>} />
        </Routes>
     )
};

export default Rotas;