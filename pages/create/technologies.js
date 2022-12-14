import {auth, db} from "../../utils/firebase";
import {useAuthState} from "react-firebase-hooks/auth";
import {useRouter} from "next/router";
import {useEffect, useState} from "react";
import {collection} from 'firebase/firestore'
import {addDoc} from 'firebase/firestore'
import {serverTimestamp, doc, updateDoc} from 'firebase/firestore'
import {toast} from 'react-toastify'
import Form from "../../components/create/form";


export default function Technologies() {
    //form state
    const [technologies, setTechnologies] = useState({description: "", title: ""});
    const [user, loading] = useAuthState(auth);
    const route = useRouter();
    const routeData = route.query;

    const updateData = route.query;
    //submit post
    const submitTechnologies = async (e) => {
        e.preventDefault();

        //run checks a
        if (technologies.description.length > 300) {
            toast.error('description is too long!')
            return;
        }
        if (!technologies.description) {
            toast.error('description is empty')
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
            setTechnologies({description: ""});
            return route.push('/dashboard')
        }
    };

    // check our user
    const checkUser = async () => {
        if (loading) return;
        if (!user) await route.push("auth/login");
        if (routeData.id) {
            setTechnologies({description: routeData.description, id: routeData.id, title: routeData.title})
        }
    };

    useEffect(() => {
        checkUser()
    }, [user, loading]);


    return (
        <div className="my-20 p-12 shadow-lg rounded-lg max-w-md mx-auto">
            <Form
                entity={technologies}
                submitFunction={submitTechnologies}
                setFunction={setTechnologies}
            />
        </div>
    )
}