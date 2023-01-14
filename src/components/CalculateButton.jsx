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
                <button className="border-2 rounded border-blue-900 bg-blue-700 text-white w-20 h-8 mb-3 text-lg" onClick={this.calc}>Calcular</button>
            </div>
        )
    }
}