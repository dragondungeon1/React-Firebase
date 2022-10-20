import "../styles/globals.css";
import Layout from "../components/layout";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
import React, {useEffect, useState} from "react";

function MyApp({Component, pageProps}) {
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    }, []);
    return (
        // <div>
        //
        // </div>
        <div>{loading ?
            <div className="flex items-center justify-center">
                <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full" role="status">
                </div>
            </div>
            :
            <Layout>
                <ToastContainer limit={1}/>
                <Component {...pageProps} />
            </Layout>
        }</div>

    );
}

export default MyApp;
