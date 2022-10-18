import {createContext, useState} from "react";
import {createUserWithEmailAndPassword, updateProfile} from "firebase/auth"
import {auth} from "../../utils/firebase";
const UserContext = createContext({});

const userContextProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState();
    const [error, setError] = useState();

    const registerUser = (email, name, password) => {
        setLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
            .then(() => {
               return updateProfile(auth.currentUser, {
                    displayName: name
                });
            })
            .then((res) => console.log(res))
            .catch(err => setError(err.message))
            .finally(() => setLoading(false))
    }

    const signInUser = (email, password) => {
        //
    }

    const logoutUser =  () => {

    }

}