import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import app from '../firebase/firebase.init';

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider()

export const AuthContext = createContext();

const UserContext = ({ children }) => {
    const [user, setUser] = useState({});
    // creating user
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }
    // signing in as user
    const LogIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }
    // signing with popup
    const LogInWithGoogle = () => {
        return signInWithPopup(auth, googleProvider);
    }
    // signing out
    const LogOut = () => {
        return signOut(auth);
    }
    // setting user to state
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            return setUser(currentUser)
        });
        return () => {
            unsubscribe();
        }
    }, [])


    const authInfo = { user, createUser, LogIn, LogInWithGoogle, LogOut }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;