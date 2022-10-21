import {useState} from "react";
import ServiceTable from "../components/tables/service/serviceTable";
import TextblockTable from "../components/tables/texblock/textblockTable";

export default function Dashboard() {
    const [openTab, setOpenTab] = useState(1);

    return (
        <div>
            <div className="flex">
                <div className="flex flex-col w-64 h-screen px-4 py-8 overflow-y-auto border-r">
                    <h2 className="text-3xl font-semibold text-center text-blue-800">Logo</h2>

                    <div className="flex flex-col justify-between mt-6">
                        <aside>
                            <ul>
                                <li>
                                    <a className="flex items-center px-4 py-2 text-gray-700 bg-gray-100 rounded-md "
                                       href="#"
                                       onClick={() => setOpenTab(1)}>
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
                                       href="#"
                                       onClick={() => setOpenTab(2)}>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                                        </svg>

                                        <span className="mx-4 font-medium">Profile</span>
                                    </a>
                                </li>

                                <li>
                                    <a className="flex items-center px-4 py-2 mt-5 text-gray-600 rounded-md hover:bg-gray-200"
                                       href="#"
                                       onClick={() => setOpenTab(3)}>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                             strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round"
                                                  d="M12 4.5v15m7.5-7.5h-15"/>
                                        </svg>
                                        <span className="mx-4 font-medium">Text blocks</span>
                                    </a>
                                </li>

                                <li>
                                    <a className="flex items-center px-4 py-2 mt-5 text-gray-600 rounded-md hover:bg-gray-200"
                                       href="#"
                                       onClick={() => setOpenTab(4)}>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                             strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round"
                                                  d="M12 4.5v15m7.5-7.5h-15"/>
                                        </svg>
                                        <span className="mx-4 font-medium">Services</span>
                                    </a>
                                </li>
                            </ul>

                        </aside>

                    </div>
                </div>
                <div className="w-full h-full p-4 m-8 overflow-y-auto">
                    <div className={openTab === 1 ? "block" : "hidden"}>
                        {" "}
                        xx
                    </div>
                    <div className={openTab === 2 ? "block" : "hidden"}>
                        React JS with Tailwind CSS Tab 2 Content show
                    </div>
                    <div className={openTab === 3 ? "block" : "hidden"}>
                        <TextblockTable/>
                    </div>
                    <div className={openTab === 4 ? "block" : "hidden"}>
                        <ServiceTable/>
                    </div>
                </div>
            </div>
        </div>
    )
}