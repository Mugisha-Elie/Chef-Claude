export default function Form(){

    // function handleSubmit(event){
    //     event.preventDefault();
    //     const formEl = event.currentTarget;
    //     const formData = new FormData(formEl);
    //     const email = formData.get("email");
    //     const password = formData.get("password");
    //     formEl.reset()
        
    // }

    // function Signup(formData){
    //     const email = formData.get("email");
    //     const employeeStatus = formData.get("employment-status");
    //     const dietaryRestrictions = formData.getAll("Dietary-restrictions")
    //     const favColor = formData.get("favColor")
    //     console.log(favColor)
    // }
    

    function Signup(formData){
        const data = Object.fromEntries(formData);
        const dietaryRestrictions = formData.getAll("Dietary-restrictions");
        const allData = {...data, ["Dietary-restrictions"]: dietaryRestrictions}
        console.log(allData);
    }

    return (
        <section className="h-fit bg-indigo-200 flex flex-col justify-center items-center gap-7">
            <h1 className="text-2xl font-Inter font-semibold">Signup Form</h1>
            <form action={Signup}
            className="space-y-5 flex flex-col p-5 shadow-lg rounded-xl bg-white w-[25%]"
            >
                <div>
                    <label htmlFor="email" className="font-Inter text-xl">Email:</label>
                    <input id="email" type="email" name="email" placeholder="e.g. john@gmail.com" defaultValue="b@b.com"
                    className="border border-gray-400 rounded-lg px-2 py-1 focus:outline-0 block"
                    />
                </div>
                

                <div>
                    <label htmlFor="password" className="font-Inter text-xl">Password:</label> 
                    <input type="password" id="password" name="password" defaultValue="123"
                    className="border border-gray-400 rounded-lg px-2 py-1 focus:outline-0 block"
                    />
                </div>

                <div>
                    <label htmlFor="description" className="font-Inter text-xl">Description</label>
                    <textarea name="description" id="description" defaultValue="Some random description on some random stuff"
                    className="border border-gray-400 rounded-lg px-2 py-1 focus:outline-0 block text-sm"
                    ></textarea>
                </div>

                <fieldset className="flex flex-col justify-center items-startemployment-stats p-2 border border-gray-400 rounded-lg">
                    <legend>Employment Status</legend>
                    <label> 
                        <input type="radio" name="employment-status" id="" className="mr-2" value="Unemployed" defaultChecked/>Unemployed
                    </label>

                    <label> 
                        <input type="radio" name="employment-status" id="" className="mr-2" value="Part time"/>Part time
                    </label>

                    <label > 
                        <input type="radio" name="employment-status" id="" className="mr-2" value="Full time"/>Full time
                    </label>

                </fieldset>

                <fieldset className="flex flex-col justify-center items-startemployment-stats p-2 border border-gray-400 rounded-lg">
                    <legend>Dietary-restrictions</legend>
                    <label> 
                        <input type="checkbox" name="Dietary-restrictions" id="" className="mr-2" value="Vegan" defaultChecked/>Vegan
                    </label>

                    <label> 
                        <input type="checkbox" name="Dietary-restrictions" id="" className="mr-2" value="Glutten Free"/>Glutten Free
                    </label>

                    <label > 
                        <input type="checkbox" name="Dietary-restrictions" id="" className="mr-2" value="Lactose"/>Lactose
                    </label>

                </fieldset>

                <label htmlFor="favColor">What is your favorite color</label>
                <select name="favColor" id="favColor"
                className="border border-gray-400 rounded-lg focus:outline-0 p-1"
                required
                >
                    <option value="">-- Choose a color --</option>
                    <option value="red">Red</option>
                    <option value="orange">Orange</option>
                    <option value="yellow">Yellow</option>
                    <option value="green">Green</option>
                    <option value="blue">Blue</option>
                    <option value="indigo">Indigo</option>
                    <option value="violet">Violet</option>
                </select>

                <button type="submit"
                className="border border-gray-400 rounded-lg py-2 hover:bg-black hover:text-white"
                >Submit</button>
                
            </form>
        </section>
    )
}