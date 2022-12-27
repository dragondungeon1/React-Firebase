import {collection, onSnapshot, query, where} from "firebase/firestore";
import {db} from "../utils/firebase";
import {useEffect, useState} from "react";
import ProductHero from "../components/Hero/productHero";
import developer from "/public/svg/hosting.svg";
import brush from "/public/svg/brush.svg"
import Image from "next/image";

export default function Page() {

    function getUrlString() {
        if (typeof window !== "undefined") {
            const params = new Proxy(new URLSearchParams(window.location.search), {
                get: (searchParams, prop) => searchParams.get(prop),
            })
            return params.product
        }
    }

    const [product, setProduct] = useState([])
    const getProduct = async () => {
        const collectionRef = collection(db, 'products',)
        const q = query(collectionRef, where('link', '==', getUrlString()))
        const unsubscribe = onSnapshot(q, (snapshot) => {
            setProduct(snapshot.docs.map((doc) => ({...doc.data(), id: doc.id})));
            return unsubscribe;
        });
    };

    const getIndividualShortProdFromProduct = (product) => {
        return product.map(prod => {
            return prod.shortDescription
        })
    }

    console.log(product)
    useEffect(() => {
        getProduct();
    }, []);

    return (
        <section>
            <div>
                {product.map((product) =>
                    <div className="item">
                        <ProductHero
                            title={product.title}
                            description={product.description}
                            img={developer} 
                        />
                    </div>
                )}
            </div>
            <section>
                <div className="max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
                    <div
                        className="grid grid-cols-1 gap-y-8 lg:grid-cols-2 lg:items-center lg:gap-x-16"
                    >


                        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
                            <a
                                className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
                                href="/accountant"
                            >
          <span className="inline-block rounded-lg bg-gray-50 p-3">
            <Image src={brush}/>
          </span>

                                <h2 className="mt-2 font-bold">Lorem ipsum</h2>

                                <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                                    Lorem ipsum dolor sit amet consectetur.
                                </p>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

        </section>
    )
}