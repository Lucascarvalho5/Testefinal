import {useState, useEffect, createContext} from 'react';
//import {fireConnection} from '../services/firebaseConnection';

export const AuthContext = createContext({});

function AuthProvider({children}){
     const [user, setUser] = useState(null);
     const [loadingAuth, setLoadingAuth] = useState(false);
     const [loading, setLoading] = useState(true);

     function loadStorage() {
         const storeUser = localStorage.getItem('sistema');

         if(storeUser) {
            const userParsed =JSON.parse(storeUser);
            setUser(userParsed)
            setLoading(false);
         }
     }


     useEffect(() => {

        loadStorage();

     }, []);

    return(
        <AuthContext.Provider value={{ signed: !!user, user, loading}}>
            {children}
        </AuthContext.Provider>
    )
};

export default AuthProvider;