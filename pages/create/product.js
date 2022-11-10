import {auth, db} from '../../utils/firebase'
import {useAuthState} from "react-firebase-hooks/auth";
import {useRouter} from "next/router";
import {useEffect, useState} from "react";
import {collection} from 'firebase/firestore'
import {addDoc} from 'firebase/firestore'
import {serverTimestamp, doc, updateDoc} from 'firebase/firestore'
import {toast} from 'react-toastify'


export default function Product() {
    //form state
    const [product, setProduct] = useState({description: ""});
    const [user, loading] = useAuthState(auth);
    const route = useRouter();
    const routeData = route.query;

    const updateData = route.query;
    //submit product
    const submitProduct = async (e) => {
        e.preventDefault();

        //run checks a
        if (product.description.length > 300) {
            toast.error('description is too long!')
            return;
        }
        if (!product.description) {
            toast.error('description is empty')
            return;
        } else {
            toast.success('product successfull')
        }

        if (product?.hasOwnProperty('id')) {
            const docRef = doc(db, 'products', product.id);
            const updatedProduct = {...product, timestamp: serverTimestamp()};
            await updateDoc(docRef, updatedProduct);
            return route.push('/')
        } else {

            //make new product
            //ref to new collection
            const collectionRef = collection(db, 'products')
            //add doc to it
            await addDoc(collectionRef, {
                ...product,
                timestamp: serverTimestamp(),
                user: user.uid,
                avatar: user.photoURL,
                username: user.displayName
            });
            setProduct({description: ""});
            return route.push('/')
        }
    };

    // check our user
    const checkUser = async () => {
        if (loading) return;
        if (!user) route.push("auth/login");
        if (routeData.id) {
            setProduct({description: routeData.description, id: routeData.id, title: routeData.title})
        }
    };

    useEffect(() => {
        checkUser()
    }, [user, loading]);


    return (
        <div className="my-20 p-12 shadow-lg rounded-lg max-w-md mx-auto">
            <form onSubmit={submitProduct}>
                <h1 className="text-2xl font-bold">
                    {product.hasOwnProperty('id') ? 'Edit product' : 'Create a new product'}
                </h1>
                <div className="py-2">
                    <h3 className="text-lg font-medium py-2">title</h3>
                    <input value={product.title}
                           onChange={(e) => setProduct({...product, title: e.target.value})}
                           className="bg-gray-800 h-12 w-full text-white rounded-lg p-2 text-small">
                    </input>
                    {/*<p className={`text-cyan-600 font-medium text-sm ${product.title.length > 100 ? 'text-red-600' : ''}`}>{product.title.length}/100</p>*/}
                </div>
                <div className="py-2">
                    <h3 className="text-lg font-medium py-2">Description</h3>
                    <textarea value={product.description}
                              onChange={(e) => setProduct({...product, description: e.target.value})}
                              className="bg-gray-800 h-48 w-full text-white rounded-lg p-2 text-small">
                    </textarea>
                    <p className={`text-cyan-600 font-medium text-sm ${product.description.length > 300 ? 'text-red-600' : ''}`}>{product.description.length}/300</p>
                </div>
                <button
                    type="submit"
                    className="w-full bg-cyan-600 text-white font-medium p-2 my-2 rounded-lg text-small">
                    {product.hasOwnProperty('id') ? 'Save and submit' : 'Create a new product'}
                </button>
            </form>
        </div>
    )
}