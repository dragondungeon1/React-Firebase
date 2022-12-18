import Image from "next/image";
import offer from "../../public/svg/offer.svg";
import Productcard from "../product/productcard";
import {collection, onSnapshot, orderBy, query} from "firebase/firestore";
import {db} from "../../utils/firebase";
import {useEffect, useState} from "react";

export default function ProductSection() {
    const [allProducts, setAllProducts] = useState([]);


    const getProducts = async () => {
        const collectionRef = collection(db, 'products')
        const q = query(collectionRef, orderBy('timestamp', 'asc'))
        const unsubscribe = onSnapshot(q, (snapshot) => {
            setAllProducts(snapshot.docs.map((doc) => ({...doc.data(), id: doc.id})));
            return unsubscribe;
        });
    };
    useEffect(() => {
        getProducts();
    }, []);

    return (
        <div className="rounded-lg mt-5">
            <div
                className="mx-auto max-h grid max-h-screen lg:max-w-[88%] max-w-2xl grid-cols-1 items-center gap-y-16 gap-x-8 py-24 px-4 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">

                <div className="justify-center">
                    <Image src={offer}/>
                </div>
                <div>
                    <h1 className="text-3xl">
                        What we offer
                    </h1>
                    <div className="grid  grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
                        {allProducts.map((product) =>
                            <div className="item">
                                <Productcard
                                    title={product.title}
                                    shortDescription={product.description}
                                    cta={product.cta}
                                    link={product.link}
                                />
                            </div>
                        )}
                    </div>
                </div>


            </div>
        </div>
    )
}