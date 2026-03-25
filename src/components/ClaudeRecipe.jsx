import ReactMarkdown from "react-markdown";

export default function ClaudeRecipe({recipe}){
    return (
        <section
        className="prose prose-slate max-w-none lg:prose-lg mb-5" aria-live="polite"
        >
            <h2
            className="text-3xl font-semibold text-gray-800"
            >Chef Claude Says: </h2>
           <ReactMarkdown>{recipe}</ReactMarkdown>
        </section>
    )
}