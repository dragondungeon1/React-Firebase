import {auth, db} from '../../utils/firebase'
import {useAuthState} from "react-firebase-hooks/auth";
import {useRouter} from "next/router";
import {useEffect, useState} from "react";
import {collection} from 'firebase/firestore'
import {addDoc} from 'firebase/firestore'
import {serverTimestamp, doc, updateDoc} from 'firebase/firestore'
import Form from "../../components/create/form";


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
                username: user.displayName
            });
            setProduct({description: ""});
            return route.push('/dashboard')
        }
    };

    // check our user
    const checkUser = async () => {
        if (loading) return;
        if (!user) route.push("auth/login");
        if (routeData.id) {
            setProduct({description: routeData.description, id: routeData.id, title: routeData.title, cta: routeData.cta, price: routeData.price, link: routeData.link })
        }
    };

    useEffect(() => {
        checkUser()
    }, [user, loading]);


    return (
        <div>
            {user ? (
            <Form
                entity={product}
                submitFunction={submitProduct}
                setFunction={setProduct}
                field={product}
                fieldTitle="CTA"
                addCtaField={true}
                addLinkField={true}
                addPriceField={true}
            /> ) : ('')}

        </div>
    )
}