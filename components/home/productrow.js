import Productcard from "../product/productcard";

export default function Productrow(){
    return (
        <div className="bg-gray-50 rounded-lg px-6 py-8 mt-10">
            <div className="flex flex-wrap justify-evenly gap-4">
                <div className="item"><Productcard/></div>
                <div className="item"><Productcard/></div>
                <div className="item"><Productcard/></div>
            </div>

        </div>
    )
}