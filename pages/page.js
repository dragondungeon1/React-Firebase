import Hero from '/components/page/hero'
import contentCreator from "/public/svg/content-creator.svg";
import {collection, onSnapshot, orderBy, query, getDoc, doc} from "firebase/firestore";
import {db} from "../utils/firebase";
import {useEffect, useState} from "react";


export default function Page(){

    const [product] = useState([]);

    // const getProduct = async () => {
    //     const docRef = doc(db, 'products', '3jqwBu8sL38dfpWqJjfo')
    //     const docSnap = await getDoc(docRef)
    //     const unsunscribe = onSnapshot(docSnap, (snapshot => {
    //         product(snapshot.docs.map((doc) =>({...doc.data(), id: doc.id})))
    //     // console.log(docSnap.data())
    //         return unsunscribe();
    //     )};
    return (
        <section>
            <div>
                <Hero
                    title='some title'
                    description="description\"
                    img={contentCreator}
                />
            </div>
        </section>
    )
}