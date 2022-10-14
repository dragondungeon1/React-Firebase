export default function Message({children}) {
    return(
        <div className="bg-white mt-10 p-8 border-b-2 rounded-lg shadow-lg">
            <div>
                <img src="" alt=""/>
                <h2>User</h2>
            </div>
            <div>
                <p>description</p>
            </div>
            {children}
        </div>
    )
}