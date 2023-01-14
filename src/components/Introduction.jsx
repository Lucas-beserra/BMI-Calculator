import React from "react"
import BattleRopesImg from "../public/images/icons8-battle-ropes-50.png"
import StretchingImg from "../public/images/icons8-stretching-50.png"


export default class Introduction extends React.Component {
    
    render() {
        return(
            <div className="mx-auto max-w-4xl mt-8 flex flex-col items-center">
                <div className="flex gap-2 items-center justify-between">
                    <img className="h-20 mt-4" src={BattleRopesImg} alt="Battle ropes image" />
                    <div className="flex flex-col items-center">
                        <h1 className="mt-4 text-4xl">Índice de massa corporal</h1>
                        <h2 className="mt-2 text-2xl">Você sabe em quanto está o seu IMC?</h2>
                    </div>
                    <img className="h-20 mt-4" src={StretchingImg} alt="Stretching image" />
                </div>

                <p className="mt-6 text-xl items-center">
                    Em meados do século XIX, um matemático chamado <a className="italic text-blue-600" href="https://pt.wikipedia.org/wiki/Adolphe_Qu%C3%A9telet">Lambert Quételet</a> desobriu uma forma muito eficaz de saber se um indivíduo está acima do peso ou não. Para fazer esse cálculo, ele dividiu seu peso pela sua altura² {'(P/A²)'} e concluiu que o resultado era equivalente ao seu índice de massa corporal.
                </p>
                <p className="mt-2 text-xl items-center">
                    Com o valor obtido a partir dessa divisão torna-se possível identificar se uma pessoa está com obesidade, desnutrição, ou apenas um pouco acima do peso. A própria OMS utiliza esse método em suas pesquisas. 
                </p>

                <h3 className="mt-4 text-2xl">Você também pode saber o seu IMC! Temos uma calculadora que vai te ajudar</h3>
            </div>
        )
    }
}
