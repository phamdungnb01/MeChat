import { createContext, useContext, useEffect, useState } from "react";
import {
    signOut,
    onAuthStateChanged,
    GoogleAuthProvider,
    signInWithPopup,
    getAdditionalUserInfo
} from 'firebase/auth'
import { useNavigate } from "react-router-dom";
import { auth, db } from "./Config";
import { collection,doc,setDoc,updateDoc } from "firebase/firestore";
const userAuthContext = createContext()

export default function UserAuthContextProvider({children}){
    const [user,setUser] = useState('')
    function logOut(){
        updateDoc(doc(db, 'users', auth.currentUser.uid),{
            isOnline: false
        })
        return signOut(auth)
    }
    async function googleSignIn(){
        const googleAuthProvider = new GoogleAuthProvider();
        try {
            const result = await signInWithPopup(auth, googleAuthProvider);
            
            const details = getAdditionalUserInfo(result);
            if (details.isNewUser) {
                setDoc(doc(db, 'users', result.user.uid), {
                    uid: result.user.uid,
                    name: result.user.displayName,
                    email: result.user.email,
                    isOnline: true,
                    avt:result.user.photoURL
                });
            }else{
                updateDoc(doc(db, 'users', auth.currentUser.uid),{
                    isOnline: true
                })
            }
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(()=>{
        const unsubcribe = onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser)
        })
        return ()=>{
            unsubcribe()
        }
    },[])
    return(
        <userAuthContext.Provider value={{user,logOut,googleSignIn}}>
            {children}
        </userAuthContext.Provider>
    )
}
export function useUserAuth(){
    return useContext(userAuthContext)
}