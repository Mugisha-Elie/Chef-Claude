import {useState} from "react";
import IngredientsList from "./IngredientsList";
import ClaudeRecipe from "./ClaudeRecipe";
import { getRecipeFromGroq } from "../ai";

export default function Main(){
    const [ingredients, setIngredients] = useState([]);
    const [recipe, setRecipe] = useState("");

    function addIngredient(formData){
        const newIngredient = formData.get("ingredient");
        setIngredients(ingredients => [newIngredient, ...ingredients]);
    }

    const ingredientList = ingredients.map(ingredient => <li>{ingredient}</li>)

    async function getRecipe(){
        // setIsShown(prevValue => !prevValue)
        const recipeMarkdown = await getRecipeFromGroq(ingredients)
        setRecipe(recipeMarkdown);
    }


    return (
        <main 
        className="flex flex-col items-stretch px-[15%]"
        >
            <form action={addIngredient}

            className="flex justify-start items-center py-15 h-fit gap-4"
            >
                <input type="text" aria-label="Add Ingredient" placeholder="eg. oregano" name="ingredient"
                className="border border-gray-400 rounded-lg p-2 flex-1"
                />
                <button
                className="px-3 py-2 bg-black text-gray-300 border rounded-lg">+ Add Ingredient</button>
            </form>

            {ingredients.length > 0 && <IngredientsList ingredients={ingredients} ingredientList={ingredientList} toggle={getRecipe}/>}
            {recipe && <ClaudeRecipe recipe={recipe}/> }
        </main>
    )
}