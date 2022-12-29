import Image from "next/image";
import Button from "../button/button";

export default function ProductHero(props) {
    return (
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
                        </h1>
                        <p
                            className="mx-auto text-base text-gray-500 sm:max-w-md lg:text-xl md:max-w-3xl"
                        >
                            {props.description}
                        </p>
                        <div className="relative flex flex-col sm:flex-row sm:space-x-4">
                            <Button
                                link="/contact"
                                title="Contact us"
                            />
                        </div>
                    </div>
                </div>
                <div className="w-full md:w-1/2">
                    <div
                        className="w-full text-center h-auto overflow-hidden"
                    >
                        <Image alt={props.title} src={props.img}/>
                    </div>
                </div>
            </div>
        </div>

    )
}