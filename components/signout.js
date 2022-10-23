import {auth} from '../utils/firebase'
import {FaSignOutAlt} from "react-icons/fa";

export default function Signout() {

    return (
        <div>
            <button className="font-medium text-black w-full py-2 px-4 my-6 flex align-middle gap-2" onClick={() => auth.signOut()}>
                <FaSignOutAlt className="text-2xl"/>sign out
            </button>
        </div>
    );
}