import emailjs from '@emailjs/browser';
import {useRef} from 'react';


export default function Contact() {
        const form = useRef();

        const sendEmail = (e) => {
            e.preventDefault();

            emailjs.sendForm('contact_service', 'template_j641qge', form.current, 'user_xzAl4tedcukr4FdEcS2Wb')
                .then((result) => {
                    console.log(result.text);
                }, (error) => {
                    console.log(error.text);
                });
        };

        return (
        <div className="mx-auto m-8 tex ">
            <section className="bg-gray-100">
                <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
                        <div className="lg:col-span-2 lg:py-12">
                            <p className="max-w-xl text-lg">
                                At the same time, the fact that we are wholly owned and totally
                                independent from manufacturer and other group control gives you
                                confidence that we will only recommend what is right for you.
                            </p>

                            <div className="mt-8">
                                <a href="" className="text-2xl font-bold text-pink-600">
                                    0151 475 4450
                                </a>

                                <address className="mt-2 not-italic">
                                    282 Kevin Brook, Imogeneborough, CA 58517
                                </address>
                            </div>
                        </div>

                        <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
                            <form ref={form} onSubmit={sendEmail} action="" className="space-y-4">
                                <div>
                                    <label className="sr-only" for="name">Name</label>
                                    <input
                                        className="w-full rounded-lg border-gray-200 p-3 text-sm"
                                        placeholder="Name"
                                        type="text"
                                        id="name"
                                        name="client_name"
                                    />
                                </div>

                                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                    <div>
                                        <label className="sr-only" for="email">Email</label>
                                        <input
                                            className="w-full rounded-lg border-gray-200 p-3 text-sm"
                                            placeholder="Email address"
                                            type="email"
                                            id="email"
                                            name="client_email"
                                        />
                                    </div>

                                    <div>
                                        <label className="sr-only" for="phone">Phone</label>
                                        <input
                                            className="w-full rounded-lg border-gray-200 p-3 text-sm"
                                            placeholder="Phone Number"
                                            type="tel"
                                            id="phone"
                                            name="client_phone"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 gap-4 text-center sm:grid-cols-3">
                                    <div>
                                        <input className="sr-only" id="option1" type="radio" tabindex="-1" />
                                        <label
                                            for="option1"
                                            className="block w-full rounded-lg border border-gray-200 p-3"
                                            tabindex="0"
                                        >
                                            <span className="text-sm font-medium"> Option 1 </span>
                                        </label>
                                    </div>

                                    <div>
                                        <input className="sr-only" id="option2" type="radio" tabindex="-1" />
                                        <label
                                            for="option2"
                                            className="block w-full rounded-lg border border-gray-200 p-3"
                                            tabindex="0"
                                        >
                                            <span className="text-sm font-medium"> Option 2 </span>
                                        </label>
                                    </div>

                                    <div>
                                        <input className="sr-only" id="option3" type="radio" tabindex="-1" />
                                        <label
                                            for="option3"
                                            className="block w-full rounded-lg border border-gray-200 p-3"
                                            tabindex="0"
                                        >
                                            <span className="text-sm font-medium"> Option 3 </span>
                                        </label>
                                    </div>
                                </div>

                                <div>
                                    <label className="sr-only" for="message">Message</label>
                                    <textarea
                                        className="w-full rounded-lg border-gray-200 p-3 text-sm"
                                        placeholder="Message"
                                        rows="8"
                                        id="message"
                                        name="client_message"
                                    ></textarea>
                                </div>

                                <div className="mt-4">
                                    <button
                                        type="submit"
                                        className="inline-flex w-full items-center justify-center rounded-lg bg-black px-5 py-3 text-white sm:w-auto"
                                    >
                                        <span className="font-medium"> Send Enquiry </span>

                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="ml-3 h-5 w-5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                stroke-width="2"
                                                d="M14 5l7 7m0 0l-7 7m7-7H3"
                                            />
                                        </svg>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/*<form >*/}
            {/*    <label>Name</label>*/}
            {/*    <input type="text" name="user_name" />*/}
            {/*    <label>Email</label>*/}
            {/*    <input type="email" name="user_email" />*/}
            {/*    <label>Message</label>*/}
            {/*    <textarea name="message" />*/}
            {/*    <button type="submit" value="Send" />*/}
            {/*</form>*/}

        </div>
    )
}