import {useEffect, useState} from "react";
import {collection, onSnapshot, orderBy, query} from "firebase/firestore";
import {db} from "../../utils/firebase";
import Message from "../message";
import Title from "../text/title";
import react from '/public/svg/react.svg'
import firebase from '/public/svg/firebase.svg'
import tailwind from '/public/svg/taildwindcss.svg'
import symfony from '/public/svg/symgony.svg'
import Image from 'next/image';


const features = [
    {name: 'React', description: 'JavaScript framework build by facebook'},
    {name: 'Firebase', description: 'Firebase is a hosting service from google'},
    {name: 'Tailwind', description: 'Tailwind is a ligtwheight CSS framework that helps us styling your website'},
    {name: 'Wordpress', description: 'WordPress is the simplest, most popular way to create your own website or blog'},
]

export default function Index() {
    const [allServices, setAllServices] = useState([]);
    const [allPosts, setAllPosts] = useState([]);

    const getServices = async () => {
        const collectionRef = collection(db, 'services')
        const q = query(collectionRef, orderBy('timestamp', 'asc'))
        const unsubscribe = onSnapshot(q, (snapshot) => {
            setAllServices(snapshot.docs.map((doc) => ({...doc.data(), id: doc.id})));
            return unsubscribe;
        });
    };

    const getPosts = async () => {
        const collectionRef = collection(db, 'posts')
        const q = query(collectionRef, orderBy('timestamp', 'desc'))
        const unsubscribe = onSnapshot(q, (snapshot) => {
            setAllPosts(snapshot.docs.map((doc) => ({...doc.data(), id: doc.id})));
            console.log(allPosts)

            return unsubscribe;
        });
    };

    useEffect(() => {
        getServices();
        getPosts()
    }, []);
    return (
        <div className="bg-gray-50 rounded-lg mt-5">
            <div
                className="mx-auto  grid lg:max-w-[88%] max-w-2xl grid-cols-1 items-center gap-y-16 gap-x-8 py-24 px-4 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
                <div>
                    <h2 className="text-3xl  font-bold tracking-tight text-gray-900 sm:text-4xl"><span
                        className="block xl:inline text-blue-500">
                        {allPosts.slice(0, 1).map(post =>
                            <Title key={post.id} {...post}>
                                {post.title}
                            </Title>
                        )}
                        </span></h2>
                    <p className="mt-4 text-gray-500">
                        <span className="block xl:inline">
                            {allPosts.slice(0,1).map(post =>
                            <Message key={post.id} {...post}>
                            </Message>
                        )}
                        </span>
                    </p>

                    <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
                        {allServices.slice(0, 4).map((service) => (

                            <div key={service.id} className="border-t border-gray-200 pt-4">
                                <dt className="font-medium text-blue-500">{service.title}</dt>
                                <dd className="mt-2 text-sm text-gray-500">{service.shortDescription}</dd>
                            </div>
                        ))}
                    </dl>
                </div>
                <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
                    <Image src={react}
                    />
                    <Image src={firebase}
                    />
                    <Image src={tailwind}
                    />
                    <Image src={symfony}
                    />
                </div>
            </div>
        </div>
    )
}
