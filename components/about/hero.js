import {collection, onSnapshot, orderBy, query} from "firebase/firestore";
import {db} from "../../utils/firebase";
import {useEffect, useState} from "react";
import Message from "../message";
import Image from 'next/image';
import programmer from '/public/svg/programming.svg'
import Title from "../text/title";
export default function Hero() {
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

    return(
        <div className="container items-center lg:max-w-[85%] max-w-6xl px-8 mx-auto xl:px-5 mt-10">
            <div className="flex flex-wrap items-center sm:-mx-3">
                <div className="w-full md:w-1/2 md:px-3">
                    <div
                        className="w-full pb-6 space-y-6 sm:max-w-md lg:max-w-lg md:space-y-4 lg:space-y-8 xl:space-y-9 sm:pr-5 lg:pr-0 md:pb-0"
                    >
                        <h1
                            className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl"
                        >Lorem ipsum sit dolor sit
                            {/*TODO: set back later*/}
                            {/*<span className="block xl:inline text-blue-500"> {allPosts.slice(1,2).map(post =>*/}
                            {/*    <Title key={post.id} {...post}>*/}

                            {/*    </Title>)}</span>*/}
                        </h1>
                        <p
                            className="mx-auto text-base text-gray-500 sm:max-w-md lg:text-xl md:max-w-3xl"
                        >lorem ipsum sit dolor sit amet dolor
                            {/*TODO: set back later*/}
                            {/*<span className="block xl:inline"> {allPosts.slice(1,2).map(post =>*/}
                            {/*    <Message key={post.id} {...post}>*/}

                            {/*    </Message>)}</span>*/}
                        </p>
                        <div className="relative flex flex-col sm:flex-row sm:space-x-4">
                            <a
                                href=""
                                className="py-2 px-2 font-medium text-blue-500 border-blue-500 border-2 rounded hover:bg-blue-500 hover:text-white transition duration-300"
                            >Learn more</a
                            >
                            <a
                                href="#_"
                                className="flex items-center px-6 py-3 text-gray-500 bg-gray-100 rounded-md hover:bg-gray-200 hover:text-gray-600"
                            >
                                Learn More
                            </a>
                        </div>
                    </div>
                </div>
                <div className="w-full md:w-1/2">
                    <div
                        className="w-full h-auto overflow-hidden"
                    >
                        <Image src={programmer}/>
                    </div>
                </div>
            </div>
        </div>
    )
}