import React from "react"

export default class Table extends React.Component {

    constructor(props) {
        super(props)
    }

    render(){
        return (
            <table className="mx-auto mt-3 mb-8 pt-5 items-center text-2xl table-auto border-collapse bg-slate-400 shadow-md">
                <thead>
                    <tr>
                        <th className="border-2 border-gray-700">Classificação</th>
                        <th className="border-2 border-gray-700">IMC</th>
                    </tr>
                </thead>
                <tbody> 
                    <tr className={this.props.result > 0 && this.props.result <= 18.5 ? "bg-yellow-400 text-zinc-50" : "bg-slate-400"}>
                        <td className="border-2 border-gray-700 pl-2">Abaixo do peso</td>
                        <td className="border-2 border-gray-700 pl-2">Menor que 18,5</td>
                    </tr>
                    <tr className={this.props.result > 18.5 && this.props.result <= 24.9 ? "bg-lime-500 text-zinc-50" : "bg-slate-400"}>
                        <td className="border-2 border-gray-700 pl-2">Peso normal</td>
                        <td className="border-2 border-gray-700 pl-2">Entre 18,5 e 24,9</td>
                    </tr>
                    <tr className={this.props.result > 25 && this.props.result <= 29.9 ? "bg-yellow-400 text-zinc-50" : "bg-slate-400"}>
                        <td className="border-2 border-gray-700 pl-2">Sobrepeso</td>
                        <td className="border-2 border-gray-700 pl-2">Entre 25 e 29,9</td>
                    </tr>
                    <tr className={this.props.result > 30 && this.props.result <= 34.9 ? "bg-red-500 text-zinc-50" : "bg-slate-400"}>
                        <td className="border-2 border-gray-700 pl-2">Obesidade Grau I</td>
                        <td className="border-2 border-gray-700 pl-2">Entre 30 e 34,9</td>
                    </tr>
                    <tr className={this.props.result > 35 && this.props.result <= 39.9 ? "bg-red-600 text-zinc-50" : "bg-slate-400"}>
                        <td className="border-2 border-gray-700 pl-2">Obesidade Grau II</td>
                        <td className="border-2 border-gray-700 pl-2">Entre 35 e 39,9</td>
                    </tr>
                    <tr className={this.props.result > 40 ? "bg-red-700 text-zinc-50" : "bg-slate-400"}>
                        <td className="border-2 border-gray-700 pl-2">Obesidade Grau III ou mórbida</td>
                        <td className="border-2 border-gray-700 pl-2">Maior que 40</td>
                    </tr>
                </tbody>
            </table>
        )
    }
}