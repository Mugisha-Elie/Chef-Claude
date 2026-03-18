export default function Main(){
    return (
        <main>
            <form action=""
            className="flex justify-center items-center py-10 px-[20%] h-fit gap-4"
            >
                <input type="text" aria-label="Add Ingredient" placeholder="eg. oregon"
                className="border border-gray-400 rounded-lg p-2 flex-1"
                />
                <button className="px-3 py-2 bg-black text-gray-200 border rounded-lg">+ Add Ingredient</button>
            </form>
        </main>
    )
}