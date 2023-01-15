import React from "react"

export default function ResetButton(props) {

    return (
        
        <button className="border-2 rounded border-orange-900 bg-orange-700 text-white w-24 h-9 mb-3 text-lg shadow-lg shadow-orange-700" onClick={()=>{
            props.setResult(0)
            props.setWeight(0)
            props.setHeight(0)
        }}>Resetar</button>
        
    )
}