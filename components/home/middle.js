import {useEffect, useState} from "react";
import {collection, onSnapshot, orderBy, query} from "firebase/firestore";
import {db} from "../../utils/firebase";

const features = [
    { name: 'React', description: 'JavaScript framework build by facebook' },
    { name: 'Firebase', description: 'Firebase is a hosting service from google'},
    { name: 'Tailwind', description: 'Tailwind is a ligtwheight CSS framework that helps us styling your website' },
    { name: 'Wordpress', description: 'WordPress is the simplest, most popular way to create your own website or blog' },
]

export default function Index() {
    const [allServices, setAllServices] = useState([]);

    const getServices = async () => {
        const collectionRef = collection(db, 'services')
        const q = query(collectionRef, orderBy('timestamp', 'desc'))
        const unsubscribe = onSnapshot(q, (snapshot) => {
            setAllServices(snapshot.docs.map((doc) => ({...doc.data(), id: doc.id})));
            return unsubscribe;
        });
    };
    useEffect(() => {
        getServices();
    }, []);
    return (
        <div className="bg-white">
            <div className="mx-auto grid lg:max-w-[88%] max-w-2xl grid-cols-1 items-center gap-y-16 gap-x-8 py-24 px-4 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Built with the finest tools</h2>
                    <p className="mt-4 text-gray-500">
                        The walnut wood card tray is precision milled to perfectly fit a stack of Focus cards. The powder coated
                        steel divider separates active cards from new ones, or can be used to archive important task lists.
                    </p>

                    <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
                        {allServices.map((service) => (
                            <div key={service.id} className="border-t border-gray-200 pt-4">
                                <dt className="font-medium text-gray-900">{service.title}</dt>
                                <dd className="mt-2 text-sm text-gray-500">{service.shortDescription}</dd>
                            </div>
                        ))}
                    </dl>
                </div>
                <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
                    <img
                        src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-01.jpg"
                        alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
                        className="rounded-lg bg-gray-100"
                    />
                    <img
                        src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-02.jpg"
                        alt="Top down view of walnut card tray with embedded magnets and card groove."
                        className="rounded-lg bg-gray-100"
                    />
                    <img
                        src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-03.jpg"
                        alt="Side of walnut card tray with card groove and recessed card area."
                        className="rounded-lg bg-gray-100"
                    />
                    <img
                        src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-04.jpg"
                        alt="Walnut card tray filled with cards and card angled in dedicated groove."
                        className="rounded-lg bg-gray-100"
                    />
                </div>
            </div>
        </div>
    )
}
