import {useEffect, useState} from "react";
import {collection, onSnapshot, orderBy, query} from "firebase/firestore";
import {db} from "../../utils/firebase";
import Message from "../message";
import Title from "../text/title";
import react from '/public/svg/react.svg'
import services from '/public/svg/service.svg'
import Image from 'next/image';


const features = [
    {name: 'React', description: 'JavaScript framework build by facebook'},
    {name: 'Firebase', description: 'Firebase is a hosting service from google'},
    {name: 'Tailwind', description: 'Tailwind is a ligtwheight CSS framework that helps us styling your website'},
    {name: 'Wordpress', description: 'WordPress is the simplest, most popular way to create your own website or blog'},
]

export default function Index() {
    const [allTechnologies, setAllTechnologies] = useState([]);
    const [allPosts, setAllPosts] = useState([]);

    const getTechnologies = async () => {
        const collectionRef = collection(db, 'technologies')
        const q = query(collectionRef, orderBy('timestamp', 'asc'))
        const unsubscribe = onSnapshot(q, (snapshot) => {
            setAllTechnologies(snapshot.docs.map((doc) => ({...doc.data(), id: doc.id})));
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
        getTechnologies();
        getPosts()
    }, []);
    return (
        <div className="rounded-lg mt-5">
            <div
                className="mx-auto  grid lg:max-w-[88%] max-w-2xl grid-cols-1 items-center gap-y-16 gap-x-8 py-24 px-4 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">

                <div className="justify-center">
                    <Image src={services}/>
                </div>

                <div>
                    <h2 className="text-3xl  font-bold tracking-tight text-gray-900 sm:text-4xl"><span
                        className="block xl:inline">
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
                        {allTechnologies.map((technologies) => (

                            <div key={technologies.id} className="border-t border-gray-200 pt-4">
                                <Image src={react}/>
                                <dt className="font-medium">{technologies.title}</dt>
                                <dd className="mt-2 text-sm text-gray-500">{technologies.description}</dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </div>
    )
}
