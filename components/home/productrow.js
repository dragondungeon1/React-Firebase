import Productcard from "../product/productcard";
import {collection, onSnapshot, orderBy, query} from "firebase/firestore";
import {db} from "../../utils/firebase";
import {useEffect, useState} from "react";


export default function Productrow() {
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
        <div className=" rounded-lg px-6 py-8 mt-10">
            <div className="flex flex-wrap justify-evenly gap-4">
                {allProducts.map((product) =>
                    <div key={product.id} className="item">
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
    )
}