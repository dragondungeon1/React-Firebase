import {auth} from '../../../utils/firebase'
import {useAuthState} from "react-firebase-hooks/auth";
import {useRouter} from "next/router";
import {useEffect, useState} from "react";
import {collection, onSnapshot, query, where, doc, deleteDoc} from "firebase/firestore";
import {db} from "../../../utils/firebase";
import {toast} from "react-toastify";
import Main from "../main";

export default function TechnologieTable() {
    const route = useRouter();
    const [user, loading] = useAuthState(auth)
    const [technologies, setTechnologies] = useState([])
    //see if user is logged in

    const getData = async () => {
        if (loading) return;
        if (!user) return route.push('auth/login');
        const collectionRef = collection(db, 'technologies');
        const q = query(collectionRef, where('user', '==', user.uid));
        const unsubscribe = onSnapshot(q, (snapshot) => {
            setTechnologies(snapshot.docs.map((doc) => ({...doc.data(), id: doc.id})))
            return unsubscribe;
        });
    };

    //delete
    const deleteTechnologies = async (id) => {
        //sub doc
        // const docRef = doc(db, 'technologies', id, 'moreInfo, doc)
        const docRef = doc(db, 'technologies', id)
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
                entities={technologies}
                removeFunction={deleteTechnologies}
                href='/technologies'
            />
        </div>
    );
}