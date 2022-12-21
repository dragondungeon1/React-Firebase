import Button from "../button/button";

export default function Productcard(props){
    return (
        <div
            className="max-w-sm p-6 bg-white  rounded-lg ">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
            </svg>
            <p>
                <h5 className="mb-2 text-xl font-semibold tracking-tight text-green-500">{props.title}</h5>
            </p>
            <p className="mb-3 font-normal text-gray-500 ">{props.shortDescription}</p>
            <Button
                link={`/page?product=${props.link}`}
                title={props.cta}
            />
        </div>

    )
}