/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";


export const AuthContext = createContext(null)

import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { auth } from "../Firebase/Firebase.config";
import useAxiosPublic from "../Hook/useAxiosPublic";

const provider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    const axiosPublic = useAxiosPublic()
    const [user,setUser] = useState({})
    const [loading,setLoading] = useState(true)

    // google login 
    const googleLogin = ()=>{
        setLoading(true)
        return signInWithPopup(auth,provider)
    }

     // user create
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // sing in user

  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // user log out

  const userLogOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  const updateUserProfile = (name, photo) => {
    setLoading(true);
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  // observer auth state

  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth,currentUser=>{
        const email = currentUser?.email || user?.email
        setUser(currentUser)
        if(currentUser){
            console.log("auth email",email)
            axiosPublic.post('/jwt',{email})
            .then(res=>{
                if(res.data.token){
                    localStorage.setItem('access-token',res.data.token)
                    setLoading(false)
                }
            })
        }
        else{
            localStorage.removeItem('access-token')
            setLoading(false)
        }
        console.log("current user",currentUser)
        
    })
    return ()=>{
        return unsubscribe()
    }
},[axiosPublic,user?.email])

    const authInfo = {
        user,
        loading,
        googleLogin,
        createUser,
        signInUser,
        userLogOut,
        updateProfile,
        updateUserProfile
    }
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;