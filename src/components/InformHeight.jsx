import React from 'react'
import measuringTape from "../public/images/icons8-fita-métrica-50.png"

export default function InformHeight (props) {

    return (
        <div className="flex gap-3"> 
            <img src={measuringTape} alt=""/>
            <div className="flex flex-col text-lg">
                <label>Altura {'(Ex.: 1.75)'}</label>
                <input 
                className="border-2 border-zinc-800 rounded pl-1 h-9 shadow-lg shadow-zinc-500"  
                type="text" value={props.hight} 
                onChange={(e) => props.setHeight(e.target.value)}/>
            </div>
        </div>
    )
}
