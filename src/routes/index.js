import React, {Suspense} from 'react';
import {Route, Routes} from 'react-router-dom';
import SignIn from '../Pages/Signin';
import SignUp from '../Pages/Signup';
import PrivateOutlet from './PrivateOutlet';
import Dashboard from '../Pages/Dashboard';
import Cart from '../Pages/Cart/Cart';

//const Dashboard = React.lazy(() =>import('../Pages/Dashboard'));

const Rotas = () => {
     return (
        <Routes>
                <Route path="/dashboard" element={
               <Suspense fallback={<div>
               </div>}>
                    <Dashboard />
               </Suspense>
                
                } />
                <Route path="/carrinho" element={<Cart/>}/>
                <Route path="/" element={<SignIn/>} />
                <Route path="/register" element={<SignUp/>} />
        </Routes>
     )
};

export default Rotas;
