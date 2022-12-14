import {auth, db} from "../../utils/firebase";
import {useAuthState} from "react-firebase-hooks/auth";
import {useRouter} from "next/router";
import {useEffect, useState} from "react";
import {collection} from 'firebase/firestore'
import {addDoc} from 'firebase/firestore'
import {serverTimestamp, doc, updateDoc} from 'firebase/firestore'
import {toast} from 'react-toastify'
import Form from "../../components/create/form";


export default function service() {
    //form state
    const [service, setService] = useState({description: "", title: ""});
    const [user, loading] = useAuthState(auth);
    const route = useRouter();
    const routeData = route.query;

    const updateData = route.query;
    //submit post
    const submitService = async (e) => {
        e.preventDefault();

        //run checks a
        if (service.description.length > 300) {
            toast.error('description is too long!')
            return;
        }
        if (!service.description) {
            toast.error('description is empty')
            return;
        } else {
            toast.success('post successfull')
        }

        if (service.hasOwnProperty('id')) {
            const docRef = doc(db, 'services', service.id);
            const updatedService = {...service, timestamp: serverTimestamp()};
            await updateDoc(docRef, updatedService);
            return route.push('/dashboard')
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
            setService({description: ""});
            return route.push('/dashboard')
        }
    };

    // check our user
    const checkUser = async () => {
        if (loading) return;
        if (!user) route.push("auth/login");
        if (routeData.id) {
            setService({description: routeData.description, id: routeData.id, title: routeData.title})
        }
    };

    useEffect(() => {
        checkUser()
    }, [user, loading]);


    return (
        <div className="my-20 p-12 shadow-lg rounded-lg max-w-md mx-auto">
            <Form
                entity={service}
                submitFunction={submitService}
                setFunction={setService}
            />
        </div>
    )
}