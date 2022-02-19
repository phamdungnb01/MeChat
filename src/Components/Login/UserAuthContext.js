import { createContext, useContext, useEffect, useState } from "react";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    GoogleAuthProvider,
    signInWithPopup
} from 'firebase/auth'
import { auth } from "./Config";

const userAuthContext = createContext()

export function UserAuthContextProvider({children}){
    const [user,setUser] = useState('')
    function signUp(email,password,id){
        return createUserWithEmailAndPassword(auth,email,password,id)
    }
    function logIn(email,password){
        return signInWithEmailAndPassword(auth,email)
    }
    function logOut(){
        return signOut(auth)
    }
    function googleSignIn(){
        const googleAuthProvider = new GoogleAuthProvider();
        return signInWithPopup(auth,googleAuthProvider)
    }
    useEffect(()=>{
        const unsubcribe = onAuthStateChanged(auth,(currenUser)=>{
            setUser(currenUser)
        })
        return ()=>{
            unsubcribe()
        }
    },[])
    return(
        <userAuthContext.Provider value={{user,signUp,logIn,logOut,googleSignIn}}>
            {children}
        </userAuthContext.Provider>
    )
}
export function useUserAuth(){
    return useContext(userAuthContext)
}