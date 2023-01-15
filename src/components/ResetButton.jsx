import React from "react"

export default function ResetButton(props) {

    return (
        
        <button className="border-2 rounded border-slate-800 bg-slate-600 text-white w-24 h-9 mb-3 text-lg shadow-lg shadow-slate-700" onClick={()=>{
            props.setResult(0)
            props.setWeight(0)
            props.setHeight(0)
        }}>Resetar</button>
        
    )
}