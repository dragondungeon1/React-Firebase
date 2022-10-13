import  {auth} from '../utils/firebase'
import {useAuthState} from "react-firebase-hooks/auth";
import {useRouter} from "next/router";
import {useEffect} from "react";

export default function account() {
    const route = useRouter();
    const [user, loading] = useAuthState(auth)
    //see if user is logged in

    const getData = async () => {
        if (loading) return;
        if (!user) return route.push('auth/login')
    }

    //get use data
    useEffect(() => {
        getData();
    },[user,loading])
    return(
        <div>
            <h1>Your posts</h1>
            <div>
                posts
            </div>
            <button onClick={() => auth.signOut()}>sign out</button>
        </div>
    );
}