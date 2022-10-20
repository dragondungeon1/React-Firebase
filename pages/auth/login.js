import {FcGoogle} from 'react-icons/fc'
import {signInWithPopup, GoogleAuthProvider, signInWithEmailAndPassword} from 'firebase/auth'
import {auth} from "../../utils/firebase";
import {useRouter} from 'next/router'
import {useAuthState} from "react-firebase-hooks/auth";
import {useEffect} from "react";
import {LockClosedIcon} from '@heroicons/react/20/solid'
import {useState} from "react";
import {toast} from "react-toastify";


export default function Login(){
    const route = useRouter();
    const [user, loading] = useAuthState(auth)
    const [LoginEmaill, setLoginEmail] = useState("")
    const [LoginPassword, setLoginPassword] = useState("")

    //Sign in with google
    const googleProvider = new GoogleAuthProvider();
    const GoogleLogin = async () => {
        try {
            const result = await signInWithPopup(auth, googleProvider);
            await route.push('/')
        }catch (error) {
            console.log
        }
    };

    //sign in with email and password
    const login = async () => {

        //login user
        try {
            const user = await signInWithEmailAndPassword(auth, LoginEmaill, LoginPassword);
            return toast.success("Login was a success")
        } catch (error) {
            console.log(error.message);
        }
    }

    useEffect(() => {
        if (user){
            route.push('/handling/authenticated')
        }else {
            // console.log('no login')
        }
    },[user])

    return(
        <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-md space-y-8  shadow-md p-10">
                <div>
                    <img
                        className="mx-auto h-12 w-auto"
                        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                        alt="Your Company"
                    />
                    <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
                        Login in to your account
                    </h2>
                </div>
                <input type="hidden" name="remember" defaultValue="true"/>
                <div className="-space-y-px rounded-md shadow-sm">
                    <div>
                        <input
                            className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                            onChange={(event) => {
                                setLoginEmail(event.target.value)
                            }} placeholder="email"/>
                    </div>
                    <div>
                        <input
                            type="password"
                            className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                            onChange={(event) => {
                                setLoginPassword(event.target.value)
                            }} placeholder="password"/>
                    </div>
                </div>

                <div className="flex items-center justify-between">
                    <div className="text-sm">
                        <a href="/auth/register" className="font-medium text-indigo-600 hover:text-indigo-500">
                            Register here
                        </a>
                    </div>
                </div>

                <div>
                    <button onClick={login} className="text-white bg-cyan-600 w-full font-medium rounded-lg flex align-middle p-4 gap-2">
                        <LockClosedIcon className="h-5 w-5 text-white group-hover:text-indigo-400" aria-hidden="true" />
                        Login</button>
                    <button onClick={GoogleLogin} className="text-white mt-6 bg-gray-700 w-full font-medium rounded-lg flex align-middle p-4 gap-2">
                        <FcGoogle className="text-2xl"/>
                        Sign in with google </button>
                </div>
            </div>
        </div>
    )
}