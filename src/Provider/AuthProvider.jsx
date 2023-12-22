import { createContext, useEffect, useState } from "react";
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import Auth from "../firebase/firebase.confiq"
export const AuthContext = createContext();
// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {

    const [user, setUser] = useState();
    const [loading, setLoading] = useState(true)
    const googleProvider = new GoogleAuthProvider;
    const gitProvider = new GithubAuthProvider();
    const login = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(Auth, email, password)
    }

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(Auth, email, password)
    }

    const updateUser = (name, photo) => {
        setLoading(true)
        return updateProfile(Auth.currentUser, {
            displayName: name, photoURL: photo
        })
    }

    const socialLogin = () => {
        setLoading(true)
        return signInWithPopup(Auth, googleProvider)
    }

    const gitLogin = () => {
        setLoading(true)
        return signInWithPopup(Auth, gitProvider)
    }

    const logout = () => {
        setLoading(true);
        return signOut(Auth);
    }


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(Auth, currentUser => {
            console.log("spying on", currentUser);
            setUser(currentUser)
            setLoading(false)
        })
        return () => {
            () => unsubscribe();
        }
    }, [])


    const authInfo = { user, login, socialLogin, createUser, updateUser, logout, loading, gitLogin }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;