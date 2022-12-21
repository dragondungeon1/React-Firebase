import Head from 'next/head'
import {useEffect, useState} from "react";
import {db} from "../utils/firebase";
import {collection, query, orderBy, onSnapshot} from "firebase/firestore";
import Hero from "../components/hero";
import Middle from "../components/home/middle";
import Faq from "../components/home/faq";
import developer from '/public/svg/developer.svg'
import ProductSection from "../components/home/productSection";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";


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

            <Hero
            tag="home"
            img={developer}
            />
            <Middle/>
            <ProductSection/>
            <Faq/>

            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                <SwiperSlide>
                    <div className="w-full h-screen flex flex-col items-center justify-center gap-8">
                        <h1 className="text-4xl text-gray-600 leading-relaxed text-center w-4/5">
                            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                            been the industry's standard dummy text ever since the 1500s"
                        </h1>
                        <div className="flex items-center gap-4">
                            <div className="rounded-full w-12 h-12 bg-black overflow-hidden">
                                <img src="https://rairaksa.github.io/assets/img/rai.jpg"/>
                            </div>
                            <div className="flex flex-col tracking-wider">
                                <label className="text-gray-600 font-bold text-base">Rai Raksa Muhamad</label>
                                <label className="text-gray-400 font-normal text-sm">Fullstack PHP Developer</label>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="w-full h-screen flex flex-col items-center justify-center gap-8">
                        <h1 className="text-4xl text-gray-600 leading-relaxed text-center w-4/5">
                            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                            been the industry's standard dummy text ever since the 1500s"
                        </h1>
                        <div className="flex items-center gap-4">
                            <div className="rounded-full w-12 h-12 bg-black overflow-hidden">
                                <img src="https://rairaksa.github.io/assets/img/rai.jpg"/>
                            </div>
                            <div className="flex flex-col tracking-wider">
                                <label className="text-gray-600 font-bold text-base">Rai Raksa Muhamad</label>
                                <label className="text-gray-400 font-normal text-sm">Fullstack PHP Developer</label>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="w-full h-screen flex flex-col items-center justify-center gap-8">
                        <h1 className="text-4xl text-gray-600 leading-relaxed text-center w-4/5">
                            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                            been the industry's standard dummy text ever since the 1500s"
                        </h1>
                        <div className="flex items-center gap-4">
                            <div className="rounded-full w-12 h-12 bg-black overflow-hidden">
                                <img src="https://rairaksa.github.io/assets/img/rai.jpg"/>
                            </div>
                            <div className="flex flex-col tracking-wider">
                                <label className="text-gray-600 font-bold text-base">Rai Raksa Muhamad</label>
                                <label className="text-gray-400 font-normal text-sm">Fullstack PHP Developer</label>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="w-full h-screen flex flex-col items-center justify-center gap-8">
                        <h1 className="text-4xl text-gray-600 leading-relaxed text-center w-4/5">
                            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                            been the industry's standard dummy text ever since the 1500s"
                        </h1>
                        <div className="flex items-center gap-4">
                            <div className="rounded-full w-12 h-12 bg-black overflow-hidden">
                                <img src="https://rairaksa.github.io/assets/img/rai.jpg"/>
                            </div>
                            <div className="flex flex-col tracking-wider">
                                <label className="text-gray-600 font-bold text-base">Rai Raksa Muhamad</label>
                                <label className="text-gray-400 font-normal text-sm">Fullstack PHP Developer</label>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}
