import React, { createContext, useEffect, useState } from 'react'
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { app } from '../firebase/firebase.config';
import { GoogleAuthProvider } from 'firebase/auth/cordova';
import useAxiosPublic from '../hooks/useAxiosPublic';
export const AuthContext = createContext(null);

export default function AuthProvider({ children }) {
    const auth = getAuth(app);
    const  axiosPublic= useAxiosPublic();
   const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)
       const googleProvider = new GoogleAuthProvider();
   // When user subscribe or not
   useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            console.log('current user', currentUser);
            if (currentUser) {
                const userInfo = { email: currentUser.email }
                axiosPublic.post('/jwt', userInfo)
                    .then(res => {
                        if (res.data.token) {
                            localStorage.setItem('access-token', res.data.token);

                        }
                        
                })
                
            } else {
                localStorage.removeItem('access-token')
            }
            setLoading(false);
        });
        return () => {
            return unsubscribe();
        }
   }, [axiosPublic])
 
      const googleSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }
   const createUser = (email, password) => {
      setLoading(true)
      return createUserWithEmailAndPassword(auth, email, password)
      
   }
   const signIn = (email, password) => {
      setLoading(true)
      return signInWithEmailAndPassword(auth, email, password)
   }
    const logOut = () => {
        setLoading(true);
       return signOut(auth);
   }
    const updateUserProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        });
    }

   const AuthInfo = {
      user,
      createUser,
      signIn,
      logOut,
      loading,
       updateUserProfile,
 googleSignIn




   }
  return (
     <AuthContext.Provider value={AuthInfo}>
        {children }
    </AuthContext.Provider>
  )
}
