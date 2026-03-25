import {useState} from "react"
import padsData from "../pads"

function Pad(props) {
    // const [on, setOn] = useState(props.on)
    
    // function toggle() {
    //     setOn(prevOn => !prevOn)
    // }

    return (
        <button 
            style={{backgroundColor: props.color}}
            className={props.on ? "on" : undefined}
            onClick={() => props.toggle(props.id)}
        ></button>
    )
}












export default function Pads(){

    const [pads, setPads] = useState(padsData)
    
    function turnAllPadsOff() {
        console.log("Turning off")
        setPads(prevPads => prevPads.map(pad => ({
            ...pad,
            on: false
        })))
    }

    function toggle(id){
        setPads(prevPads => prevPads.map(pad => {
            if(pad.id === id){
                return {
                    ...pad,
                    on: !pad.on
                }
            }else{
                return pad
            }
        }))
    }
    
    const buttonElements = pads.map(pad => (
        <Pad key={pad.id} color={pad.color} on={pad.on} id={pad.id} toggle={toggle}/>
    ))
    
    return (
        <main>
            <div className="pad-container">
                {buttonElements}
            </div>
            <button className="all-off" onClick={turnAllPadsOff}>Turn All Off</button>
        </main>
    )
}
