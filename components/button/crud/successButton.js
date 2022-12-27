import Link from "next/link";

export default function SuccessButton(props) {
    return (
        <div>
            <div>
                <Link href={props.link}>
                    <a className="text-center mt-5 inline-flex items-center py-1 px-2 font-medium text-green-500 border-green-500 border-2 rounded hover:bg-green-500 hover:text-white transition duration-170">{props.title}
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </a>
                </Link>
            </div>
        </div>
    )
}