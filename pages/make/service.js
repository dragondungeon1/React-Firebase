import {auth, db} from "../../utils/firebase";
import {useAuthState} from "react-firebase-hooks/auth";
import {useRouter} from "next/router";
import {useEffect, useState} from "react";
import {collection} from 'firebase/firestore'
import {addDoc} from 'firebase/firestore'
import {serverTimestamp, doc, updateDoc} from 'firebase/firestore'
import {toast} from 'react-toastify'


export default function service() {
    //form state
    const [service, setService] = useState({shortDescription: "", title: ""});
    const [user, loading] = useAuthState(auth);
    const route = useRouter();
    const routeData = route.query;

    const updateData = route.query;
    //submit post
    const submitService = async (e) => {
        e.preventDefault();

        //run checks a
        if (service.shortDescription.length > 300) {
            toast.error('shortDescription is too long!')
            return;
        }
        if (!service.shortDescription) {
            toast.error('shortDescription is empty')
            return;
        } else {
            toast.success('post successfull')
        }

        if (service.hasOwnProperty('id')) {
            const docRef = doc(db, 'posts', service.id);
            const updatedService = {...service, timestamp: serverTimestamp()};
            await updateDoc(docRef, updatedService);
            return route.push('/')
        } else {

            //make new post
            //ref to new collection
            const collectionRef = collection(db, 'services')
            //add doc to it
            await addDoc(collectionRef, {
                ...service,
                timestamp: serverTimestamp(),
                user: user.uid,
                avatar: user.photoURL,
                username: user.displayName
            });
            setService({shortDescription: ""});
            return route.push('/')
        }
    };

    // check our user
    const checkUser = async () => {
        if (loading) return;
        if (!user) route.push("auth/login");
        if (routeData.id) {
            setService({shortDescription: routeData.shortDescription, id: routeData.id, title: routeData.title})
        }
    };

    useEffect(() => {
        checkUser()
    }, [user, loading]);


    return (
        <div className="my-20 p-12 shadow-lg rounded-lg max-w-md mx-auto">
            <form onSubmit={submitService}>
                <h1 className="text-2xl font-bold">
                    {service.hasOwnProperty('id') ? 'Edit service' : 'Create a new service'}
                </h1>
                <div className="py-2">
                    <h3 className="text-lg font-medium py-2">title</h3>
                    <input value={service.title}
                              onChange={(e) => setService({...service, title: e.target.value})}
                              className="bg-gray-800 h-12 w-full text-white rounded-lg p-2 text-small">
                    </input>
                    <p className={`text-cyan-600 font-medium text-sm ${service.title.length > 100 ? 'text-red-600' : ''}`}>{service.title.length}/100</p>
                </div>
                <div className="py-2">
                    <h3 className="text-lg font-medium py-2">shortDescription</h3>
                    <textarea value={service.shortDescription}
                              onChange={(e) => setService({...service, shortDescription: e.target.value})}
                              className="bg-gray-800 h-48 w-full text-white rounded-lg p-2 text-small">
                    </textarea>
                    <p className={`text-cyan-600 font-medium text-sm ${service.shortDescription.length > 300 ? 'text-red-600' : ''}`}>{service.shortDescription.length}/300</p>
                </div>
                <button
                    type="submit"
                    className="w-full bg-cyan-600 text-white font-medium p-2 my-2 rounded-lg text-small">
                    {service.hasOwnProperty('id') ? 'Save and submit' : 'Create a new service'}
                </button>
            </form>
        </div>
    )
}