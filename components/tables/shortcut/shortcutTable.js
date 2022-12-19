import {auth} from '../../../utils/firebase'
import {useAuthState} from "react-firebase-hooks/auth";
import {useRouter} from "next/router";
import {useEffect, useState} from "react";
import Link from 'next/link'
import {collection, onSnapshot, query, where, doc, deleteDoc} from "firebase/firestore";
import {db} from "../../../utils/firebase";
import {toast} from "react-toastify";
import Main from "../main";

export default function ShortcutTable() {
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

    //delete
    const deleteShortcut = async (id) => {
        //sub doc
        const docRef = doc(db, 'shortcuts', id)
        await deleteDoc(docRef);
        toast.success('Removed successfully')
    }

    //get use data
    useEffect(() => {
        getData();
    }, [user, loading])
    return (
        <div>
            <Main
                entities={shortcuts}
                removeFunction={deleteShortcut}
                href='/shortcut'
            />
        </div>
    );
}