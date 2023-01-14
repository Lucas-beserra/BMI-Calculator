import React from "react"
import Tip from "./Tip"

export default class BmiResult extends React.Component {

    constructor(props) {
        super(props)
    }

    render(){
        return(
            <div className="max-w-md flex flex-col items-center">
                <p className="text-xl">Resultado: {this.props.result.toFixed(2)}</p>
                <hr/>
                <Tip result={this.props.result}/>
            </div>
        )
    }

}