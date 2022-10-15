import {auth} from '../utils/firebase'
import {useAuthState} from "react-firebase-hooks/auth";
import {useRouter} from "next/router";
import {useEffect, useState} from "react";
import Link from 'next/link'
import {collection, onSnapshot, query, where, doc, deleteDoc} from "firebase/firestore";
import {db} from "../utils/firebase";
import Message from "../components/message";
import {BsTrash2Fill} from "react-icons/bs";
import {AiFillEdit} from "react-icons/ai";
import {FaSignOutAlt} from "react-icons/fa";

export default function account() {
    const route = useRouter();
    const [user, loading] = useAuthState(auth)
    const [posts, setPosts] = useState([])
    //see if user is logged in

    const getData = async () => {
        if (loading) return;
        if (!user) return route.push('auth/login');
        const collectionRef = collection(db, 'posts');
        const q = query(collectionRef, where('user', '==', user.uid));
        const unsubscribe = onSnapshot(q, (snapshot) => {
            setPosts(snapshot.docs.map((doc) => ({...doc.data(), id: doc.id})))
            return unsubscribe;
        });
    };

    //delete

    const deletePost = async (id) => {
        //sub doc
        // const docRef = doc(db, 'posts', id, 'moreInfo, doc)
        const docRef = doc(db, 'posts', id)
        await deleteDoc(docRef);
    }

    //get use data
    useEffect(() => {
        getData();
    }, [user, loading])
    return (
        <div>
            <h1>Your posts</h1>
            <div>
                {posts.map(post => {
                    return (
                        <Message {...post} key={post.id}>
                            <div className="flex gap-4">
                                <button onClick={() => deletePost(post.id)}
                                        className="text-red-600 flex items-center justify-center gap-2 text-sm py-2">
                                    <BsTrash2Fill className="text-2xl"/> Delete
                                </button>
                                <Link href={{pathname: '/post', query: post}}>
                                    <button
                                        className="text-teal-600 flex items-center justify-center gap-2 text-sm py-2">
                                        <AiFillEdit className="text-2xl"/>Edit
                                    </button>
                                </Link>
                            </div>
                        </Message>
                    )
                })}
            </div>
            <button className="font-medium text-white bg-gray-800 py-2 px-4 my-6 flex align-middle gap-2" onClick={() => auth.signOut()}>
                <FaSignOutAlt className="text-2xl"/>sign out
            </button>
        </div>
    );
}