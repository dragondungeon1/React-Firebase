export default function LinkField({entity, setFunction, field,}) {
    return (
        <div className="py-2">
            <h3 className="text-lg font-medium py-2">Link</h3>
            <input value={field}
                   onChange={(e) => setFunction({...entity, link: e.target.value})}
                   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5">
            </input>
        </div>
    )
}