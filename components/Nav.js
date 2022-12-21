import Link from 'next/link'
import {auth} from "../utils/firebase";
import {useAuthState} from "react-firebase-hooks/auth";
import Dropdown from "./dropdown/dropdown";

export default function Nav() {
    const [user] = useAuthState(auth);

    return (
        <div>
        <nav className="flex shadow-md rounded-lg p-5 justify-between items-center py-4">
            <Link href="/">
                <button className="text-lg font-medium">
                    creative minds
                </button>
            </Link>
            <Link href="/about">
                <button className="text-lg font-medium">
                   About
                </button>
            </Link>
            <Link href="/contact">
                <button className="text-lg font-medium">
                    Contact
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
                        <Dropdown/>
                    </div>

                )

                }
            </ul>
        </nav>
        </div>
    )
}