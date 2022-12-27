import CtaField from "../fields/ctaField";
import LinkField from "../fields/linkField";
import PriceField from "../fields/priceField";
import TagField from "../fields/tagField";
import SuccessButton from "../button/crud/successButton";
import DeleteButton from "../button/crud/deleteButton";

export default function Form({submitFunction, setFunction, entity, fieldTitle, addCtaField, addLinkField, addPriceField, addTagField}) {
    return (
        <div>
            <div>
                <section className="bg-white ">
                    <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16 " >
                        <h1 className="text-2xl font-bold">
                            {entity.hasOwnProperty('id') ? 'Edit record' : 'Create a new record'}
                        </h1>
                        <form onSubmit={submitFunction}>
                            <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                                <div className="sm:col-span-2">
                                    <label htmlFor="name"
                                           className="block mb-2 text-sm font-medium text-gray-900 ">Title
                                    </label>
                                    <input value={entity.title}
                                           onChange={(e) => setFunction({...entity, title: e.target.value})}
                                            required=""
                                           className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                        />



                                </div>
                                <div className="w-full">
                                    { addCtaField === true ?
                                        <CtaField
                                            field={entity.cta}
                                            fieldTitle={fieldTitle}
                                            setFunction={setFunction}
                                            entity={entity}
                                        /> :
                                        ''
                                    }

                                </div>
                                <div className="w-full">
                                    { addLinkField === true ?
                                        <LinkField
                                            linkField={entity.link}
                                            fieldTitle={fieldTitle}
                                            setFunction={setFunction}
                                            entity={entity}
                                        /> :
                                        ''
                                    }
                                </div>
                                <div className="w-full">
                                    { addPriceField === true ?
                                        <PriceField
                                            linkField={entity.price}
                                            fieldTitle={fieldTitle}
                                            setFunction={setFunction}
                                            entity={entity}
                                        /> :
                                        ''
                                    }
                                    { addTagField === true ?
                                        <TagField
                                            linkField={entity.price}
                                            fieldTitle={fieldTitle}
                                            setFunction={setFunction}
                                            entity={entity}
                                        /> :
                                        ''
                                    }
                                </div>
                                <div className="sm:col-span-2">
                                    <label htmlFor="description"
                                           className="block mb-2 text-sm font-medium text-gray-900 ">Description</label>
                                    <textarea value={entity.description}
                                              onChange={(e) => setFunction({...entity, description: e.target.value})}
                                              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500    ">
                                          </textarea>
                                </div>
                            </div>

                            <div className="flex items-center space-x-4">
                                <SuccessButton
                                    link="/"
                                    title="Submit"
                                />
                                {entity.hasOwnProperty('id') ? <DeleteButton/> : ''}
                            </div>
                        </form>
                    </div>
                </section>

            </div>

        </div>
    )
}