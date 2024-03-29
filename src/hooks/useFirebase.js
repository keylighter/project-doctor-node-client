import { useEffect, useState } from "react";
import initializeFirebaseApp from "../Pages/Login/Firebase/firebase.init";

import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, GoogleAuthProvider, signInWithPopup, getIdToken, updateProfile } from "firebase/auth";


//get id token link
//  https://firebase.google.com/docs/auth/admin/verify-id-tokens

initializeFirebaseApp();

const useFirebase = () => {

    const [user, setUser] = useState({});

    const [isLoading, setIsLoading] = useState(true);

    const [authError, setAuthError] = useState('');

    const [admin, setAdmin] = useState(false);

    const [token, setToken] = useState('')

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();


    const registerUser = (email, password, userName, location, history) => {
        //when register click button
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const newUser = { email, displayName: userName };

                setUser(newUser);

                //save user to the data base (username or displayName?)
                saveUser(email, userName, 'POST');
                const destination = location?.state?.form || '/';
                history.replace(destination);
                setAuthError('');
                //send name to firebase after creation of new user
                updateProfile(auth.currentUser, {
                    displayName: userName,
                }).then(() => {

                }).catch((error) => {


                })
                    .catch((error) => {
                        const errorCode = error.code;
                        const errorMessage = error.message;
                        setAuthError(errorMessage);
                        // ..
                    })
            })
            .finally(() => setIsLoading(false));
    };
    // bringing useLocation and useHistory
    const loginUser = (email, password, location, history) => {
        setIsLoading(true);

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {

                //*** location and history  */
                const destination = location?.state?.form || '/';
                history.replace(destination);

                // Signed in 
                // const user = userCredential.user;

                setAuthError('')
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setAuthError(errorMessage);
            })
            .finally(() => setIsLoading(false));
        ;
    }

    const signInWithGoogle = (location, history) => {
        setIsLoading(true);
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                const destination = location?.state?.form || '/';
                history.replace(destination);

                //save user to the data base (username or displayName?)
                saveUser(user.email, user.displayName, 'PUT');

                setAuthError('');
            }).catch((error) => {
                setAuthError(error.message);
            }).finally(() => setIsLoading(false));
    };

    //get admin 

    useEffect(() => {
        fetch(`https://damp-springs-90927.herokuapp.com/users/${user.email}`)
            .then(res => res.json())
            .then(data => {
                setAdmin(data.admin)
            })
    }, [user.email]);


    const logOut = () => {
        setIsLoading(true);

        signOut(auth)
            .then(() => {
                // setUser({});
            })
            .catch((error) => {

            })
            .finally(() => setIsLoading(false));
    };
    //bringing parameter 'method' from g.signin and register 
    const saveUser = (email, displayName, method) => {
        const user = { email, displayName };

        fetch('https://damp-springs-90927.herokuapp.com/users', {
            //sending data thats why POST
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        //show the data in UI
    }


    //observe user presence
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {


                setUser(user);
                getIdToken(user)
                    .then(idToken => {
                        setToken(idToken)
                    })
            } else {
                setUser({});
            }
            setIsLoading(false);
        });

        return () => unsubscribe;

    }, [auth])





    //retun object
    return {
        user,
        admin,
        isLoading,
        authError,
        token,
        setUser,
        registerUser,
        loginUser,
        signInWithGoogle,
        logOut
    }

}

export default useFirebase;