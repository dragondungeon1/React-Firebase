export default function CtaField({entity, setFunction, field,}) {
    return (
        <div className="py-2">
            <h3 className="text-lg font-medium py-2">CTA</h3>
            <input value={field}
                   onChange={(e) => setFunction({...entity, cta: e.target.value})}
                   className="bg-gray-800 h-12 w-full text-white rounded-lg p-2 text-small">
            </input>
        </div>
    )
}