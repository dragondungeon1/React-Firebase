import Title from "../text/title";
import Message from "../message";
import Image from "next/image";
import contentCreator from "../../public/svg/content-creator.svg";

export default function Hero(props) {
    return (
        <section>
            <div className="container items-center lg:max-w-[85%] max-w-6xl px-8 mx-auto xl:px-5 mt-10">
                <div className="flex flex-wrap items-center sm:-mx-3">
                    <div className="w-full md:w-1/2 md:px-3">
                        <div
                            className="w-full pb-6 space-y-6 sm:max-w-md lg:max-w-lg md:space-y-4 lg:space-y-8 xl:space-y-9 sm:pr-5 lg:pr-0 md:pb-0"
                        >
                            <h1
                                className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl"
                            >
                                {props.title}
                            {/*<span className="block xl:inline text-blue-500"> {allPosts.slice(1,2).map(post =>*/}
                            {/*    <Title key={post.id} {...post}>*/}

                            {/*    </Title>)}</span>*/}
                            </h1>
                            <p
                                className="mx-auto text-base text-gray-500 sm:max-w-md lg:text-xl md:max-w-3xl"
                            >
                            {/*<span className="block xl:inline"> {allPosts.slice(1,2).map(post =>*/}
                            {/*    <Message key={post.id} {...post}>*/}

                            {/*    </Message>)}</span>*/}
                                {props.description}
                            </p>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2">
                        <div
                            className="w-full h-auto overflow-hidden"
                        >
                            <Image src={props.img}/>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}