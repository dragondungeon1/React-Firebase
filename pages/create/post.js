import {auth, db} from '../../utils/firebase'
import {useAuthState} from "react-firebase-hooks/auth";
import {useRouter} from "next/router";
import {useEffect, useState} from "react";
import {collection} from 'firebase/firestore'
import {addDoc} from 'firebase/firestore'
import {serverTimestamp, doc, updateDoc} from 'firebase/firestore'
import {toast} from 'react-toastify'
import Form from "../../components/create/form";


export default function post() {
    //form state
    const [post, setPost] = useState({description: ""});
    const [user, loading] = useAuthState(auth);
    const route = useRouter();
    const routeData = route.query;

    const updateData = route.query;
    //submit post
    const submitPost = async (e) => {
        e.preventDefault();

        //run checks a
        if (post.description.length > 300) {
            toast.error('description is too long!')
            return;
        }
        if (!post.description) {
            toast.error('description is empty')
            return;
        } else {
            toast.success('post successfull')
        }

        if (post?.hasOwnProperty('id')) {
            const docRef = doc(db, 'posts', post.id);
            const updatedPost = {...post, timestamp: serverTimestamp()};
            await updateDoc(docRef, updatedPost);
            return route.push('/')
        } else {

            //make new post
            //ref to new collection
            const collectionRef = collection(db, 'posts')
            //add doc to it
            await addDoc(collectionRef, {
                ...post,
                timestamp: serverTimestamp(),
                user: user.uid,
                avatar: user.photoURL,
                username: user.displayName
            });
            setPost({description: ""});
            return route.push('/dashboard')
        }
    };

    // check our user
    const checkUser = async () => {
        if (loading) return;
        if (!user) route.push("auth/login");
        if (routeData.id) {
            setPost({description: routeData.description, id: routeData.id, title: routeData.title, tag: routeData.tag})
        }
    };

    useEffect(() => {
        checkUser()
    }, [user, loading]);


    return (
        <div className="my-20 p-12 shadow-lg rounded-lg max-w-md mx-auto">
            <Form
            entity={post}
            submitFunction={submitPost}
            setFunction={setPost}
            addTagField={true}
            />
        </div>
    )
}