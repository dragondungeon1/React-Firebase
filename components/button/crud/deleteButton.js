export default function DeleteButton() {
    return (
        <div>
            <div>
                <button className="text-center mt-5 inline-flex items-center py-2 px-2 font-medium text-red-500 border-red-500 border-2 rounded hover:bg-red-500 hover:text-white transition duration-170">Delete
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
        </div>
    )
}