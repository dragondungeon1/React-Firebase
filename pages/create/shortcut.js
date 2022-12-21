import {auth, db} from "../../utils/firebase";
import {useAuthState} from "react-firebase-hooks/auth";
import {useRouter} from "next/router";
import {useEffect, useState} from "react";
import {collection} from 'firebase/firestore'
import {addDoc} from 'firebase/firestore'
import {serverTimestamp, doc, updateDoc} from 'firebase/firestore'
import {toast} from 'react-toastify'
import Form from "../../components/create/form";


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
        if (!shortcut.link) {
            toast.error('link is empty')
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
            setShortcut({link: ""});
            return route.push('/dashboard')
        }
    };

    // check our user
    const checkUser = async () => {
        if (loading) return;
        if (!user) route.push("auth/login");
        if (routeData.id) {
            setShortcut({link: routeData.link, id: routeData.id, title: routeData.title})
        }
    };

    useEffect(() => {
        checkUser()
    }, [user, loading]);


    return (
        <div className="my-20 p-12 shadow-lg rounded-lg max-w-md mx-auto">
            <Form
                entity={shortcut}
                submitFunction={submitShortcut}
                setFunction={setShortcut}
                addLinkField={true}
            />
        </div>
    )
}