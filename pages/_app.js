import "../styles/globals.css";
import Layout from "../components/layout";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
import React, {useEffect, useState} from "react";
import Footer from "../components/footer/footer";

function MyApp({Component, pageProps}) {
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    }, []);
    return (
            <Layout>
                <ToastContainer limit={1}/>
                <Component {...pageProps} />
                <Footer/>
            </Layout>

    );
}
export default MyApp;
