import Link from "next/link";

export default function Button(props) {
    return (
        <div>
            <div>
                <Link href={props.link}>
                    <a className="py-2 px-2 font-medium text-green-600 border-green-600 border-2 rounded hover:bg-green-600 hover:text-white transition duration-170">{props.title}</a>
                </Link>
            </div>
        </div>
    )
}