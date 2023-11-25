/* eslint-disable react/prop-types */
import { createContext, useState } from "react";


export const AuthContext = createContext(null)

import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../Firebase/Firebase.config";

const provider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {

    const [user,setUser] = useState('')
    const [loading,setLoading] = useState(true)

    // google login 
    const googleLogin = ()=>{
        setLoading(true)
        return signInWithPopup(auth,provider)
    }

    const authInfo = {
        user,
        loading,
        googleLogin
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