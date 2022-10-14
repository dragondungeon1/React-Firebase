import Link from 'next/link'
import {auth} from "../utils/firebase";
import {useAuthState} from "react-firebase-hooks/auth";

export default function Nav() {
    const [user, loading] = useAuthState(auth);


    return (
        <div>
        <nav className="flex shadow-lg rounded-lg p-5 justify-between items-center py-10">
            <Link href="/">
                <button className="text-lg font-medium">
                    creative minds
                </button>
            </Link>
            <ul className="flex items-center gap-10">
                {!user && (
                    <Link href="/auth/login">
                        <a className="py-2 px-4 text-sm bg-cyan-500 text-white rounded-lg font-medium ml-8">Join Now</a>
                    </Link>
                )}
                {user && (
                    <div className="flex items-center gap-6">
                        <Link href="/post">
                            <button className="py-2 px-4 text-sm bg-cyan-500 text-white rounded-lg font-medium ml-8">Post</button>
                        </Link>
                        <Link href="/account">
                            <img className="w-12 rounded-full cursor-pointer" src={user.photoURL} alt="foto"/>
                        </Link>
                    </div>

                )

                }
            </ul>
        </nav>
        </div>
    )
}