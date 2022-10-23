import {useRouter} from "next/router";
import {useAuthState} from "react-firebase-hooks/auth";
import {auth, db} from "../../../utils/firebase";
import {useEffect, useState} from "react";
import {collection, deleteDoc, doc, onSnapshot, query, where} from "firebase/firestore";

export default function Shortcut() {

    const route = useRouter();
    const [user, loading] = useAuthState(auth)
    const [shortcuts, setShortcuts] = useState([])
    //see if user is logged in

    const getData = async () => {
        if (loading) return;
        if (!user) return route.push('auth/login');
        const collectionRef = collection(db, 'shortcuts');
        const q = query(collectionRef, where('user', '==', user.uid));
        const unsubscribe = onSnapshot(q, (snapshot) => {
            setShortcuts(snapshot.docs.map((doc) => ({...doc.data(), id: doc.id})))
            return unsubscribe;
        });
    };

    //getdata
    useEffect(() => {
        getData();
    }, [user, loading])
    return (
            <div>
            {shortcuts.map((shortcut) => (
                <a href={shortcut.route}
                   className="group block max-w-xs mx-auto rounded-lg p-6 bg-white ring-1 ring-slate-900/5 shadow-lg space-y-3 hover:bg-sky-500 duration-500 ease-in-out hover:ring-sky-500">
                    <div className="flex items-center space-x-3">

                        <h3 className="text-slate-900 group-hover:text-white text-sm font-semibold">
                            <span>Title: </span>
                            {shortcut.title}</h3>

                    </div>
                    <p className="text-slate-500 group-hover:text-white text-sm"><span>Route: </span> {shortcut.route}</p>
                </a>
                ))}
        </div>
    )
}