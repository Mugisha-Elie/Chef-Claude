import ChefIcon from "../assets/Chef Claude Icon.svg";

export default function Header(){
    return (
        <header
        className="flex justify-center items-center gap-2 font-Inter p-3 shadow-sm h-fit bg-white mb-5"
        >
            <img src={ChefIcon} alt="Chef Icon" />
            <h1 className="text-3xl font-normal">Chef Claude</h1>
        </header>
    )
}