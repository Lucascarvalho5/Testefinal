import {useState, useEffect, createContext} from 'react';
import { db, auth } from '../services/firebaseConnection';
import {doc, setDoc} from 'firebase/firestore';
import { createUserWithEmailAndPassword, signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext({});

function AuthProvider({children}){
    const navigate = useNavigate();
     const [user, setUser] = useState(null);
     const [loadingAuth, setLoadingAuth] = useState(false);
     const [loading, setLoading] = useState(true);

     function loadStorage() {
         const storeUser = localStorage.getItem('sistema');

         if(storeUser) {
            const userParsed =JSON.parse(storeUser);
            setUser(userParsed)
            navigate('/dashboard')
         }
           setLoading(false);
         
     }


     useEffect(() => {

        loadStorage();
     }, []);


     useEffect(() =>{
        if(user) {
            navigate('/dashboard')
        }
    }, [navigate, user]);



     async function signUp(email, password, name){
        setLoadingAuth(true);

        await createUserWithEmailAndPassword (auth, email, password).then(async(userCredential) => {
            let uid = userCredential.user.uid;

            await setDoc(doc(db, 'users', uid), {
                avatarUrl: null
            }).then(() => {
                let data = {
                    uid,
                    name,
                    email: userCredential.user.email,
                    avatarUrl: null
                };
                setUser(data);
                storageUser(data);
            }).catch((error) => {
                alert('Ocorreu algum erro ao cadastrar o usuário!')
                console.error(error);
            }).finally(() => {
                setLoadingAuth(false);
            })
        });
     };

     async function logout(){
        signOut(auth).then(() => {
            alert('Usuario deslogado com sucesso')
            localStorage.removeItem('sistema');
        })
     }

    function storageUser(data) {
        const userStringify = JSON.stringify(data);
        localStorage.setItem('sistema', userStringify)
    }

     return(
        <AuthContext.Provider value={{ signed: !!user, user, loading, loadingAuth, logout, signUp}}>
            {children}
        </AuthContext.Provider>
    )
};

export default AuthProvider;