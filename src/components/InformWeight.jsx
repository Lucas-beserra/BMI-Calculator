import React from 'react'

export default class InformWeight extends React.Component {

    constructor(props) {
        super(props)
    }

    render(){
        return (
            <div className="flex flex-col mr-2 text-lg">
                <label>Peso {'(Ex.: 58.5)'}</label>
                <input 
                type="text"
                className="border-2 border-zinc-900 rounded pl-1 h-9" 
                value={this.props.weight} 
                onChange={(e)=>this.props.setWeight(e.target.value)}/>
            </div>
        )
    }
}
