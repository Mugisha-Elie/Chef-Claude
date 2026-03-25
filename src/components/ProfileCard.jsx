import Avatar from "../assets/avatar.jpg"

export default function ProfileCard(){
    return (
        <div className="h-screen flex justify-center items-center bg-[#0C4A6E]">
            <div className="shadow-lg bg-white flex flex-col items-center justify-start gap-2 p-5 rounded-lg h-[80%] w-[25%]">
                <div className="rounded-full max-h-max overflow-hidden flex-1">
                    <img src={Avatar} alt="" className="aspect-auto h-45"/>
                </div>
            </div>
        </div>
    )
}