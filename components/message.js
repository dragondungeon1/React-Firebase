import {useAuthState} from "react-firebase-hooks/auth";
import {auth} from "../utils/firebase";
import {useRouter} from "next/router";

export default function Message({children, avatar, username, description}) {
    const [user, loading] = useAuthState(auth)
    const route = useRouter();
    var url = window.location.pathname
    var pathname = '/account'

    return url === pathname ?(
        <div>
         <div className="bg-white mt-10 p-8 border-b-2 rounded-lg shadow-lg">
            <div className="flex items-center gap-2">
                <img src={avatar} alt="" className="w-10 rounded-full"/>
                <h2>{username}</h2>
            </div>
            <div className="py-4">
                <p>{description}</p>
            </div>
            {children}
         </div>
        </div>
    ) : (
        <div>
            {/*<div className="bg-white mt-10 p-8 border-b-2 rounded-lg shadow-lg">*/}
            {/*<div className="flex items-center gap-2">*/}
            {/*<img src={avatar} alt="" className="w-10 rounded-full"/>*/}
            <h2>{username}</h2>
            {/*</div>*/}
            {/*<div className="py-4">*/}
            <p>{description}</p>
            {/*</div>*/}
            {children}
        </div>
    )
}