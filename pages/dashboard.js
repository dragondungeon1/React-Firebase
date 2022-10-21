export default function Dashboard() {
    return(
        <div>
            <div className="flex">
                <div className="flex flex-col w-64 h-screen px-4 py-8 overflow-y-auto border-r">
                    <h2 className="text-3xl font-semibold text-center text-blue-800">Logo</h2>


                    <div className="flex flex-col justify-between mt-6">
                        <aside>
                            <ul>
                                <li>
                                    <a className="flex items-center px-4 py-2 text-gray-700 bg-gray-100 rounded-md "
                                       href="#">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none"
                                             viewBox="0 0 24 24"
                                             stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
                                        </svg>

                                        <span className="mx-4 font-medium">Dashboard</span>
                                    </a>
                                </li>

                                <li>
                                    <a className="flex items-center px-4 py-2 mt-5 text-gray-600 rounded-md hover:bg-gray-200"
                                       href="#">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none"
                                             viewBox="0 0 24 24"
                                             stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                  d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/>
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                                        </svg>

                                        <span className="mx-4 font-medium">Settings</span>
                                    </a>
                                </li>

                                <li>
                                    <a className="flex items-center px-4 py-2 mt-5 text-gray-600 rounded-md hover:bg-gray-200"
                                       href="#">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                        </svg>
                                        <span className="mx-4 font-medium">Text blocks</span>
                                    </a>
                                </li>

                                <li>
                                    <a className="flex items-center px-4 py-2 mt-5 text-gray-600 rounded-md hover:bg-gray-200"
                                       href="#">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                        </svg>
                                        <span className="mx-4 font-medium">Services</span>
                                    </a>
                                </li>
                            </ul>

                        </aside>

                    </div>
                </div>
                <div className="w-full h-full p-4 m-8 overflow-y-auto">
                    <h1 className="text-2xl font-poppins">Your Shortcuts</h1>
                    <div className="flex items-center gap-10 justify-center p-40 border-4 border-dotted">
                        <a href="#"
                           className="group block max-w-xs mx-auto rounded-lg p-6 bg-white ring-1 ring-slate-900/5 shadow-lg space-y-3 hover:bg-sky-500 duration-500 ease-in-out hover:ring-sky-500">
                            <div className="flex items-center space-x-3">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                                </svg>

                                <h3 className="text-slate-900 group-hover:text-white text-sm font-semibold">
                                    New text block</h3>

                            </div>
                            <p className="text-slate-500 group-hover:text-white text-sm">Create a new text block</p>
                        </a>

                        <a href="#"
                           className="group block max-w-xs mx-auto rounded-lg p-6 bg-white ring-1 ring-slate-900/5 shadow-lg space-y-3 hover:bg-sky-500 duration-500 ease-in-out hover:ring-sky-500">
                            <div className="flex items-center space-x-3">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                                </svg>

                                <h3 className="text-slate-900 group-hover:text-white text-sm font-semibold">
                                    New text block</h3>

                            </div>
                            <p className="text-slate-500 group-hover:text-white text-sm">Create a new Service</p>
                        </a>

                        <a href="#"
                           className="group block max-w-xs mx-auto rounded-lg p-6 bg-white ring-1 ring-slate-900/5 shadow-lg space-y-3 hover:bg-sky-500 duration-500 ease-in-out hover:ring-sky-500">
                            <div className="flex items-center space-x-3">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                                </svg>

                                <h3 className="text-slate-900 group-hover:text-white text-sm font-semibold">
                                    New text block</h3>

                            </div>
                            <p className="text-slate-500 group-hover:text-white text-sm">Create a new text block</p>
                        </a>
                    </div>
                </div>
        </div>
        </div>
    )
}