import {useAuthState} from "react-firebase-hooks/auth";
import {auth} from "../utils/firebase";
import {useRouter} from "next/router";

export default function Message({description}) {
    const [user, loading] = useAuthState(auth)
    const route = useRouter();
    var url = window.location.pathname
    var pathname = '/account'

    return (
        <div>
            <p>{description}</p>
        </div>
    )
}