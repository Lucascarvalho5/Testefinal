import React, {Suspense} from 'react';
import {Route, Routes} from 'react-router-dom';
import SignIn from '../Pages/Signin';
import SignUp from '../Pages/Signup';
import PrivateOutlet from './PrivateOutlet';
import Dashboard from '../Pages/Dashboard';

//const Dashboard = React.lazy(() =>import('../Pages/Dashboard'));

const Rotas = () => {
     return (
        <Routes>
                <Route path="/dashboard1" element={<PrivateOutlet/>} />
                <Route path="/dashboard" element={
               <Suspense fallback={<div>
                    <button>ola</button>
                    <h1>texto</h1>
               </div>}>
                    <Dashboard />
               </Suspense>
                
                } />
                
                <Route path="/" element={<SignIn/>} />
                <Route path="/register" element={<SignUp/>} />
        </Routes>
     )
};

export default Rotas;