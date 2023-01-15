import React from "react"

export default class CalculateButton extends React.Component {

    constructor(props) {
        super(props)
        this.calc = this.functionCalc.bind(this)
    }

    functionCalc = () => {
        const response = this.props.weight/(this.props.height*this.props.height)
        this.props.setResult(response)
    }

    render(){
        return (
            <div>
                <button className="border-2 rounded border-slate-800 bg-slate-600 text-white w-24 h-9 mb-3 text-lg shadow-lg shadow-slate-700" onClick={this.calc}>Calcular</button>
            </div>
        )
    }
}