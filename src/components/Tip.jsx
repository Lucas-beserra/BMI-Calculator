import React from 'react'

export default function Tip (props) {

    if(props.result > 0 && props.result < 18.5){
        return (
            <p className="animate-pulse transition-transform duration-600">
                Estudos apontam que indivíduos com esse índice de massa corporal estão abaixo do recomendado para se levar uma vida plenamente saudável. Se esse for o seu caso, recomendamos que busque uma alimentação mais saudável e com maior frequência. Se possível, pratique algum esporte ou atividade física.
            </p>
        )
    }
    else if(props.result >= 18.5 && props.result <= 24.9){
        return (
            <p>
                Estudos apontam que indivíduos com esse índice de massa corporal estão dentro do recomendado para se levar uma vida plenamente saudável. Se esse for o seu caso, você está de parabéns! Continue assim e você será o terror do INSS.
            </p>
        )
    }
    else if(props.result >= 25 && props.result <= 29.9){
        return (
            <p>
                Estudos apontam que indivíduos com esse índice de massa corporal estão um pouco acima do recomendado para se levar uma vida plenamente saudável. Se esse for o seu caso, não precisa se preocupar tanto, é só dar uma caminhadinha e se alimentar de maneira saudável. Ah, se puder também pode praticar algum esporte ou ir à academia!
            </p>
        )
    }
    else if(props.result >= 30 && props.result <= 34.9){
        return (
            <p>
                Estudos apontam que indivíduos com esse índice de massa corporal estão no primeiro grau de obesidade. Se esse for o seu caso, não deixe de procurar um acompanhamento profissional, se alimentar bem e praticar atividades físicas!
            </p>
        )
    }
    else if(props.result >= 35 && props.result <= 39.9){
        return (
            <p>
                Estudos apontam que indivíduos com esse índice de massa corporal estão no segundo grau de obesidade. Se esse for o seu caso, recomendamos que você procure um médico ou nutricionista, para que receba a devida orientação de como diminuir o IMC.
            </p>
        )
    }
    else if(props.result > 40){
        return (
            <p>
                Estudos apontam que indivíduos com esse índice de massa corporal estão no terceiro grau de obesidade, popularmente conhecido como "obesidade mórbida". Se esse for o seu caso, recomendamos que você procure um médico ou nutricionista urgentemente, pois sua vida está em risco.
            </p>
        )
    }
}