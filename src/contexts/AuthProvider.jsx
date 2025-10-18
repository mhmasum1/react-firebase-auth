import React from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword } from 'firebase/auth/web-extension';
import { auth } from '../firebase/firebase.init';
import { onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';

const AuthProvider = ({ children }) => {

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    // Get current user info
    onAuthStateChanged(auth, (currentUser) => {
        if (currentUser) {
            console.log('inside observer : if', currentUser)
        }
        else {
            console.log('inside observer :else ', currentUser)
        }
    })

    const userInfo = {
        createUser,
        signInUser,
    }
    return (
        <AuthContext value={userInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;