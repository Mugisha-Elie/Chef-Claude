// import Anthropic from "@anthropic-ai/sdk"
// import { HfInference } from '@huggingface/inference'
// import { GoogleGenerativeAI } from "@google/generative-ai";
import Groq from "groq-sdk";

console.log(import.meta.env.VITE_GROQ_API_KEY);

const SYSTEM_PROMPT = `
You are an assistant that receives a list of ingredients that a user has and suggests a recipe they could make with some or all of those ingredients. You don't need to use every ingredient they mention in your recipe. The recipe can include additional ingredients they didn't mention, but try not to include too many extra ingredients. Format your response in markdown to make it easier to render to a web page
`;

const groq = new Groq({ 
    apiKey: import.meta.env.VITE_GROQ_API_KEY,
    dangerouslyAllowBrowser: true 
});

export async function getRecipeFromGroq(ingredientsArr) {
    const ingredientsString = ingredientsArr.join(", ");
    try {
        const chatCompletion = await groq.chat.completions.create({
            messages: [
                { role: "system", content: SYSTEM_PROMPT },
                { role: "user", content: `I have ${ingredientsString}. Suggest a recipe!` }
            ],
            model: "llama-3.3-70b-versatile",
        });
        return chatCompletion.choices[0].message.content;
    } catch (err) {
        console.error(err);
        return "Chef is offline!";
    }
}
