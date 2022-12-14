export default function Form({submitFunction, setFunction, entity}) {
    return (
        <div>
            <form onSubmit={submitFunction}>
                <h1 className="text-2xl font-bold">
                    {entity.hasOwnProperty('id') ? 'Edit post' : 'Create a new post'}
                </h1>
                <div className="py-2">
                    <h3 className="text-lg font-medium py-2">title</h3>
                    <input value={entity.title}
                           onChange={(e) => setFunction({...entity, title: e.target.value})}
                           className="bg-gray-800 h-12 w-full text-white rounded-lg p-2 text-small">
                    </input>
                </div>
                <div className="py-2">
                    <h3 className="text-lg font-medium py-2">Description</h3>
                    <textarea value={entity.description}
                              onChange={(e) => setFunction({...entity, description: e.target.value})}
                              className="bg-gray-800 h-48 w-full text-white rounded-lg p-2 text-small">
                    </textarea>
                    {/*<p className={`text-cyan-600 font-medium text-sm ${entity.description.length > 300 ? 'text-red-600' : ''}`}>{entity.description.length}/300</p>*/}
                </div>
                <button
                    type="submit"
                    className="w-full bg-cyan-600 text-white font-medium p-2 my-2 rounded-lg text-small">
                    {entity.hasOwnProperty('id') ? 'Save and submit' : 'Save and submit'}
                </button>
            </form>
        </div>
    )
}