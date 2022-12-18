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
            <a href={props.link} className="inline-flex items-center text-green-600 hover:underline">
                {props.cta}
                <svg className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20"
                     xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path>
                    <path
                        d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path>
                </svg>
            </a>
        </div>

    )
}