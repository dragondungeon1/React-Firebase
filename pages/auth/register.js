import {LockClosedIcon} from "@heroicons/react/20/solid";
import {useState} from "react";
import {createUserWithEmailAndPassword} from 'firebase/auth'
import {auth} from "../../utils/firebase";
import {toast} from 'react-toastify'
import {useEffect} from "react";
import {useRouter} from "next/router";
import {useAuthState} from "react-firebase-hooks/auth";
import Image from "next/image";

export default function Register() {
    const [registerEmaill, setRegisterEmail] = useState("")
    const [registerPassword, setRegisterPassword] = useState("")
    const route = useRouter();
    const [user, loading] = useAuthState(auth)

    const register = async () => {

        //auto generate new user / login user
        try {
            const user = await createUserWithEmailAndPassword(auth, registerEmaill, registerPassword);
            return toast.success("Registration was a success")
        } catch (error) {
            console.log(error.message);
        }
    };

    useEffect(() => {
        if (user){
            route.push('/account')
        }else {
            return 'not logged in'
        }
    },[user, route])

    return (
        <div>
            <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                <div className="w-full max-w-md space-y-8  shadow-md p-10">
                    <div>
                        <Image
                            className="mx-auto h-12 w-auto"
                            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                            alt="Your Company"
                        />
                        <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
                            Register in to your account
                        </h2>
                    </div>
                        <input type="hidden" name="remember" defaultValue="true"/>
                        <div className="-space-y-px rounded-md shadow-sm">
                            <div>
                                <input
                                    className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                    onChange={(event) => {
                                        setRegisterEmail(event.target.value)
                                    }} placeholder="email"/>
                            </div>
                            <div>
                                <input
                                    type="password"
                                     className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                    onChange={(event) => {
                                        setRegisterPassword(event.target.value)
                                    }} placeholder="password"/>
                            </div>
                        </div>
                        <div>
                            <button onClick={register} className="text-white bg-cyan-600 w-full font-medium rounded-lg flex align-middle p-4 gap-2">
                                <LockClosedIcon className="h-5 w-5 text-white group-hover:text-indigo-400" aria-hidden="true" />
                                Register</button>
                        </div>
                </div>
            </div>
        </div>
    )
}