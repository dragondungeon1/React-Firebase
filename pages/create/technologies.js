import {auth, db} from "../../utils/firebase";
import {useAuthState} from "react-firebase-hooks/auth";
import {useRouter} from "next/router";
import {useEffect, useState} from "react";
import {collection} from 'firebase/firestore'
import {addDoc} from 'firebase/firestore'
import {serverTimestamp, doc, updateDoc} from 'firebase/firestore'
import {toast} from 'react-toastify'


export default function Technologies() {
    //form state
    const [technologies, setTechnologies] = useState({shortDescription: "", title: ""});
    const [user, loading] = useAuthState(auth);
    const route = useRouter();
    const routeData = route.query;

    const updateData = route.query;
    //submit post
    const submitTechnologies = async (e) => {
        e.preventDefault();

        //run checks a
        if (technologies.shortDescription.length > 300) {
            toast.error('shortDescription is too long!')
            return;
        }
        if (!technologies.shortDescription) {
            toast.error('shortDescription is empty')
            return;
        } else {
            toast.success('post successfull')
        }

        if (technologies.hasOwnProperty('id')) {
            const docRef = doc(db, 'technologiess', technologies.id);
            const updatedTechnologies = {...technologies, timestamp: serverTimestamp()};
            await updateDoc(docRef, updatedTechnologies);
            return route.push('/dashboard')
        } else {

            //make new post
            //ref to new collection
            const collectionRef = collection(db, 'technologies')
            //add doc to it
            await addDoc(collectionRef, {
                ...technologies,
                timestamp: serverTimestamp(),
                user: user.uid,
                avatar: user.photoURL,
                username: user.displayName
            });
            setTechnologies({shortDescription: ""});
            return route.push('/dashboard')
        }
    };

    // check our user
    const checkUser = async () => {
        if (loading) return;
        if (!user) await route.push("auth/login");
        if (routeData.id) {
            setTechnologies({shortDescription: routeData.shortDescription, id: routeData.id, title: routeData.title})
        }
    };

    useEffect(() => {
        checkUser()
    }, [user, loading]);


    return (
        <div className="my-20 p-12 shadow-lg rounded-lg max-w-md mx-auto">
            <form onSubmit={submitTechnologies}>
                <h1 className="text-2xl font-bold">
                    {technologies.hasOwnProperty('id') ? 'Edit technologies' : 'Create a new technologies'}
                </h1>
                <div className="py-2">
                    <h3 className="text-lg font-medium py-2">title</h3>
                    <input value={technologies.title}
                           onChange={(e) => setTechnologies({...technologies, title: e.target.value})}
                           className="bg-gray-800 h-12 w-full text-white rounded-lg p-2 text-small">
                    </input>
                </div>
                <div className="py-2">
                    <h3 className="text-lg font-medium py-2">shortDescription</h3>
                    <textarea value={technologies.shortDescription}
                              onChange={(e) => setTechnologies({...technologies, shortDescription: e.target.value})}
                              className="bg-gray-800 h-48 w-full text-white rounded-lg p-2 text-small">
                    </textarea>
                </div>
                <button
                    type="submit"
                    className="w-full bg-cyan-600 text-white font-medium p-2 my-2 rounded-lg text-small">
                    {technologies.hasOwnProperty('id') ? 'Save and submit' : 'Create a new technologies'}
                </button>
            </form>
        </div>
    )
}