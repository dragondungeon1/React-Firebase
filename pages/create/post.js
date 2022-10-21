import {auth, db} from '../../utils/firebase'
import {useAuthState} from "react-firebase-hooks/auth";
import {useRouter} from "next/router";
import {useEffect, useState} from "react";
import {collection} from 'firebase/firestore'
import {addDoc} from 'firebase/firestore'
import {serverTimestamp, doc, updateDoc} from 'firebase/firestore'
import {toast} from 'react-toastify'


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
            return route.push('/')
        }
    };

    // check our user
    const checkUser = async () => {
        if (loading) return;
        if (!user) route.push("auth/login");
        if (routeData.id) {
            setPost({description: routeData.description, id: routeData.id, title: routeData.title})
        }
    };

    useEffect(() => {
        checkUser()
    }, [user, loading]);


    return (
        <div className="my-20 p-12 shadow-lg rounded-lg max-w-md mx-auto">
            <form onSubmit={submitPost}>
                <h1 className="text-2xl font-bold">
                    {post.hasOwnProperty('id') ? 'Edit post' : 'Create a new post'}
                </h1>
                <div className="py-2">
                    <h3 className="text-lg font-medium py-2">title</h3>
                    <input value={post.title}
                           onChange={(e) => setPost({...post, title: e.target.value})}
                           className="bg-gray-800 h-12 w-full text-white rounded-lg p-2 text-small">
                    </input>
                    {/*<p className={`text-cyan-600 font-medium text-sm ${post.title.length > 100 ? 'text-red-600' : ''}`}>{post.title.length}/100</p>*/}
                </div>
                <div className="py-2">
                    <h3 className="text-lg font-medium py-2">Description</h3>
                    <textarea value={post.description}
                              onChange={(e) => setPost({...post, description: e.target.value})}
                              className="bg-gray-800 h-48 w-full text-white rounded-lg p-2 text-small">
                    </textarea>
                    <p className={`text-cyan-600 font-medium text-sm ${post.description.length > 300 ? 'text-red-600' : ''}`}>{post.description.length}/300</p>
                </div>
                <button
                    type="submit"
                    className="w-full bg-cyan-600 text-white font-medium p-2 my-2 rounded-lg text-small">
                    {post.hasOwnProperty('id') ? 'Save and submit' : 'Create a new post'}
                </button>
            </form>
        </div>
    )
}