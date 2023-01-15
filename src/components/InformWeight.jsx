import React from 'react'
import waightBalance from "../public/images/icons8-weighing-50.png"


export default class InformWeight extends React.Component {

    constructor(props) {
        super(props)
    }

    render(){
        return (
            <div className="flex gap-1">
                <img className="w-16 mt-1" src={waightBalance} alt=""/>
                <div className="flex flex-col mr-2 text-lg">
                    <label>Peso {'(Ex.: 59.7)'}</label>
                    <input 
                    type="text"
                    className="border-2 border-zinc-800 rounded pl-1 h-9 shadow-lg shadow-zinc-500" 
                    value={this.props.weight} 
                    onChange={(e)=>this.props.setWeight(e.target.value)}/>
                </div>
            </div>
        )
    }
}
