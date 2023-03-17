import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase.config';
import {createUserWithEmailAndPassword,updateProfile, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, GoogleAuthProvider,signInWithPopup} from 'firebase/auth'
export const AuthContext = createContext();
   const provider =new GoogleAuthProvider();
    const auth= getAuth(app)
    const AuthProvider=({children})=>{
        const [user,setUser]=useState(null)
        const createUser=(email,password)=>{
            return createUserWithEmailAndPassword(auth,email,password)
        }
        const signin =(email, password)=>{
         
            return signInWithEmailAndPassword(auth,email,password)
        }
        const signInWithGoogle=()=>{
            return signInWithPopup(auth, provider)
        }
        const updateUser=(userInfo)=>{
            return updateProfile(auth.currentUser,userInfo)
        }
        const logout=()=>{
            return signOut(auth)
        }
       
        useEffect(()=>{
            const unsubscribe=onAuthStateChanged(auth,currentUser=>{
                console.log('user observing')
                setUser(currentUser);
            })
            return ()=>unsubscribe();
        },[])
        
        const authInfo={
           createUser,
           signin,
           logout,
           signInWithGoogle,
           updateUser,
           user
        }
   
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;