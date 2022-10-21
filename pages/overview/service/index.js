import {auth} from '../../../utils/firebase'
import {useAuthState} from "react-firebase-hooks/auth";
import {useRouter} from "next/router";
import {useEffect, useState} from "react";
import Link from 'next/link'
import {collection, onSnapshot, query, where, doc, deleteDoc} from "firebase/firestore";
import {db} from "../../../utils/firebase";
import {toast} from "react-toastify";

export default function index() {
    const route = useRouter();
    const [user, loading] = useAuthState(auth)
    const [services, setServices] = useState([])
    //see if user is logged in

    const getData = async () => {
        if (loading) return;
        if (!user) return route.push('auth/login');
        const collectionRef = collection(db, 'services');
        const q = query(collectionRef, where('user', '==', user.uid));
        const unsubscribe = onSnapshot(q, (snapshot) => {
            setServices(snapshot.docs.map((doc) => ({...doc.data(), id: doc.id})))
            return unsubscribe;
        });
    };

    //delete

    const deleteService = async (id) => {
        //sub doc
        const docRef = doc(db, 'services', id)
        await deleteDoc(docRef);
        toast.success('Removed successfully')
    }

    //get use data
    useEffect(() => {
        getData();
    }, [user, loading])
    return (
        <div>
            <div className="overflow-x-auto relative shadow-md sm:rounded-lg mt-6">
                <table className="w-full text-sm text-left text-gray-500">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                    <tr>
                        <th scope="col" className="py-3 px-6">
                            text-block ID
                        </th>
                        <th scope="col" className="py-3 px-6">
                            Title
                        </th>
                        <th scope="col" className="py-3 px-6">
                            Description
                        </th>
                        <th scope="col" className="py-3 px-6">
                            User
                        </th>
                        <th scope="col" className="py-3 px-6">
                            Action
                        </th>
                        <th scope="col" className="py-3 px-6">
                            <Link href="/overview/service">
                                <button  className="py-2 px-4 text-sm bg-green-500 text-white rounded-lg font-medium ml-8">Create new</button>
                            </Link>
                        </th>

                    </tr>
                    </thead>
                    <tbody>
                    {services.map((service) => (
                        <tr key={service.id} className="bg-white border-b">

                            <td className="py-4 px-6">
                                {service.id}
                            </td>
                            <td className="py-4 px-6">
                                {service.title}
                            </td>
                            <td className="py-4 px-6">
                                {service.description}
                            </td>
                            <td className="py-4 px-6">
                                {user.email}
                            </td>
                            <td className="py-4 px-6">
                                <div className="flex gap-4">
                                    <Link href={{pathname: '/make/service', query: service}}>
                                        <button
                                            className="text-teal-600 flex items-center justify-center gap-2 text-sm py-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
                                            </svg>
                                            Edit
                                        </button>
                                    </Link>
                                    <button onClick={() => deleteService(service.id)}
                                            className="text-red-600 flex items-center justify-center gap-2 text-sm py-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                        </svg>
                                        Delete
                                    </button>
                                </div>
                            </td>
                        </tr>
                    ))}

                    </tbody>
                </table>
            </div>

        </div>
    );
}