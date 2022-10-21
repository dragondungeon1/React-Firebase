import {auth, db} from "../../utils/firebase";
import {useAuthState} from "react-firebase-hooks/auth";
import {useRouter} from "next/router";
import {useEffect, useState} from "react";
import {collection} from 'firebase/firestore'
import {addDoc} from 'firebase/firestore'
import {serverTimestamp, doc, updateDoc} from 'firebase/firestore'
import {toast} from 'react-toastify'


export default function Shortcut() {
    //form state
    const [shortcut, setShortcut] = useState({route: "", title: ""});
    const [user, loading] = useAuthState(auth);
    const route = useRouter();
    const routeData = route.query;

    const updateData = route.query;
    //submit post
    const submitShortcut = async (e) => {
        e.preventDefault();

        //run checks a
        if (shortcut.route.length > 300) {
            toast.error('route is too long!')
            return;
        }
        if (!shortcut.route) {
            toast.error('route is empty')
            return;
        } else {
            toast.success('post successfull')
        }

        if (shortcut.hasOwnProperty('id')) {
            const docRef = doc(db, 'posts', shortcut.id);
            const updatedShortcut = {...shortcut, timestamp: serverTimestamp()};
            await updateDoc(docRef, updatedShortcut);
            return route.push('/')
        } else {

            //make new post
            //ref to new collection
            const collectionRef = collection(db, 'shortcuts')
            //add doc to it
            await addDoc(collectionRef, {
                ...shortcut,
                timestamp: serverTimestamp(),
                user: user.uid,
                avatar: user.photoURL,
                username: user.displayName
            });
            setShortcut({route: ""});
            return route.push('/')
        }
    };

    // check our user
    const checkUser = async () => {
        if (loading) return;
        if (!user) route.push("auth/login");
        if (routeData.id) {
            setShortcut({route: routeData.route, id: routeData.id, title: routeData.title})
        }
    };

    useEffect(() => {
        checkUser()
    }, [user, loading]);


    return (
        <div className="my-20 p-12 shadow-lg rounded-lg max-w-md mx-auto">
            <form onSubmit={submitShortcut}>
                <h1 className="text-2xl font-bold">
                    {shortcut.hasOwnProperty('id') ? 'Edit Shortcut' : 'Create a new Shortcut'}
                </h1>
                <div className="py-2">
                    <h3 className="text-lg font-medium py-2">Title</h3>
                    <input value={shortcut.title}
                           onChange={(e) => setShortcut({...shortcut, title: e.target.value})}
                           className="bg-gray-800 h-12 w-full text-white rounded-lg p-2 text-small">
                    </input>
                </div>
                <div className="py-2">
                    <h3 className="text-lg font-medium py-2">Route</h3>
                    <input value={shortcut.route}
                           onChange={(e) => setShortcut({...shortcut, route: e.target.value})}
                           className="bg-gray-800 h-12 w-full text-white rounded-lg p-2 text-small">
                    </input>
                </div>
                <button
                    type="submit"
                    className="w-full bg-cyan-600 text-white font-medium p-2 my-2 rounded-lg text-small">
                    {shortcut.hasOwnProperty('id') ? 'Save and submit' : 'Create a new Shortcut'}
                </button>
            </form>
        </div>
    )
}