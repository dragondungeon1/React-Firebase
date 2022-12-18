import Productcard from "../components/product/productcard";
import {collection, onSnapshot, query, where} from "firebase/firestore";
import {db} from "../utils/firebase";
import {useEffect, useState} from "react";

export default function Page(){

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
        const collectionRef = collection(db, 'products', )
        const q = query(collectionRef, where('link','==', getUrlString()))
        const unsubscribe = onSnapshot(q, (snapshot) => {
            setProduct(snapshot.docs.map((doc) => ({...doc.data(), id: doc.id})));
            return unsubscribe;
        });
    };
    useEffect(() => {
        getProduct();
    }, []);

    return (
        <section>
            <div>
                {product.map((product) =>
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
        </section>
    )
}