export default function IngredientsList(props){
    return (
        <section
            className="space-y-5 mb-10"
            >
                <h2
                className="text-3xl font-semibold font-Inter "
                >Ingredients at hand</h2>
                <ul 
                className="list-disc list-inside decoration-gray-600 ml-3 text-lg text-gray-600"
                >{props.ingredientList}</ul>

                {props.ingredients.length >= 4 && <div 
                className="bg-[#F0EFEB] rounded-lg p-5 grid grid-cols-2 mt-10"
                >
                    <div className="space-y-1">
                        <h2 className="font-Inter text-xl">Ready for a recipe?</h2>
                        <p className="font-Inter font-light text-gray-500 text-sm">Generate a recipe from your list of ingredients</p>
                    </div>

                    <button
                    className="px-3 py-1 rounded-md bg-[#D17557] text-white place-self-end text-lg"
                    onClick={props.toggle}
                    >Get a recipe</button>
                </div>}
            </section>
    )
}