import { useRef, useState, useEffect } from "react"
import {collection, onSnapshot, orderBy, query} from "firebase/firestore";
import {db} from "../../utils/firebase";

const FaqsCard = (props) => {

    const answerElRef = useRef()
    const [state, setState] = useState(false)
    const [answerH, setAnswerH] = useState('0px')
    const { faqsList, idx } = props

    const handleOpenAnswer = () => {
        const answerElH = answerElRef.current.childNodes[0].offsetHeight
        setState(!state)
        setAnswerH(`${answerElH + 20}px`)
    }

    return (
        <div
            className="space-y-3 mt-5 overflow-hidden border-b"
            key={idx}
            onClick={handleOpenAnswer}
        >
            <h4 className="cursor-pointer pb-5 flex items-center justify-between text-lg text-gray-700 font-medium">
                {props.q}
                {
                    state ? (
                        <svg width="18" height="2" viewBox="0 0 18 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17 1H1" stroke="#30B918" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" stroke="#30B918" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                        </svg>
                    )
                }
            </h4>
            <div
                ref={answerElRef} className="duration-300"
                style={state ? {height: answerH } : {height: '0px'}}
            >
                <div>
                    <p className="text-gray-500">
                        {props.description}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default function Faq() {

    const [allFaqs, setAllProducts] = useState([]);

    const getProducts = async () => {
        const collectionRef = collection(db, 'faqs')
        const q = query(collectionRef, orderBy('timestamp', 'asc'))
        const unsubscribe = onSnapshot(q, (snapshot) => {
            setAllProducts(snapshot.docs.map((doc) => ({...doc.data(), id: doc.id})));
            return unsubscribe;
        });
        console.log(allFaqs)
    };
    useEffect(() => {
        getProducts();
    }, []);

    return (
        <section className="leading-relaxed max-w-screen-xl mt-12 mx-auto px-4 lg:px-8 border-t border-gray-200">
            <div className="space-y-3 text-center mt-6">
                <h1 className="text-3xl text-green-500 font-semibold">
                    Frequently Asked Questions
                </h1>
                <p className="text-gray-600 max-w-lg mx-auto text-lg">
                    Answered all frequently asked questions, Still confused? feel free to contact us.
                </p>
            </div>
            <div className="mt-14 max-w-2xl mx-auto">
                {
                    allFaqs.map((item, idx) => (
                        <FaqsCard
                            idx={idx}
                            faqsList={item}
                            q={item.title}
                            description={item.description}
                        />
                    ))
                }
            </div>
        </section>
    )
}