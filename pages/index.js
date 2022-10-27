import Head from 'next/head'
import Message from "../components/message";
import {useEffect, useState} from "react";
import {db} from "../utils/firebase";
import {collection, query, orderBy, onSnapshot} from "firebase/firestore";
import Hero from "../components/hero";
import Middle from "../components/home/middle";
import Faq from "../components/home/faq";
import Productcard from "../components/product/productcard";
import Productrow from "../components/home/productrow";

export default function Home() {
    //  create state with all posts
    const [allPosts, setAllPosts] = useState([]);

    const getPosts = async () => {
        const collectionRef = collection(db, 'posts')
        const q = query(collectionRef, orderBy('timestamp', 'desc'))
        const unsubscribe = onSnapshot(q, (snapshot) => {
            setAllPosts(snapshot.docs.map((doc) => ({...doc.data(), id: doc.id})));
            return unsubscribe;
        });
    };

    useEffect(() => {
        getPosts();
    }, []);

    return (
        <div>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Creatives minds"/>
            </Head>

            <Hero/>
            <Middle/>
            <Faq/>
            <Productrow/>
        </div>
    )
}
