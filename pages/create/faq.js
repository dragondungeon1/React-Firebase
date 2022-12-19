import {auth, db} from '../../utils/firebase'
import {useAuthState} from "react-firebase-hooks/auth";
import {useRouter} from "next/router";
import {useEffect, useState} from "react";
import {collection} from 'firebase/firestore'
import {addDoc} from 'firebase/firestore'
import {serverTimestamp, doc, updateDoc} from 'firebase/firestore'
import {toast} from 'react-toastify'
import Form from "../../components/create/form";


export default function Faq() {
    //form state
    const [faq, setsetFaq] = useState({description: ""});
    const [user, loading] = useAuthState(auth);
    const route = useRouter();
    const routeData = route.query;

    const updateData = route.query;
    //submit faq
    const submitFaq = async (e) => {
        e.preventDefault();

        //run checks a
        if (faq.description.length > 300) {
            toast.error('description is too long!')
            return;
        }
        if (!faq.description) {
            toast.error('description is empty')
            return;
        } else {
            toast.success('faq successfull')
        }

        if (faq?.hasOwnProperty('id')) {
            const docRef = doc(db, 'faqs', faq.id);
            const updatedfaq = {...faq, timestamp: serverTimestamp()};
            await updateDoc(docRef, updatedfaq);
            return route.push('/')
        } else {

            //make new faq
            //ref to new collection
            const collectionRef = collection(db, 'faqs')
            //add doc to it
            await addDoc(collectionRef, {
                ...faq,
                timestamp: serverTimestamp(),
                user: user.uid,
                avatar: user.photoURL,
                username: user.displayName
            });
            setsetFaq({description: ""});
            return route.push('/dashboard')
        }
    };

    // check our user
    const checkUser = async () => {
        if (loading) return;
        if (!user) route.push("auth/login");
        if (routeData.id) {
            setsetFaq({description: routeData.description, id: routeData.id, title: routeData.title})
        }
    };

    useEffect(() => {
        checkUser()
    }, [user, loading]);


    return (
        <div className="my-20 p-12 shadow-lg rounded-lg max-w-md mx-auto">
            <Form
                entity={faq}
                submitFunction={submitFaq}
                setFunction={setsetFaq}
            />
        </div>
    )
}