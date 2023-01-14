import React, { useState } from 'react'
import InformHeight from './components/InformHeight'
import InformWeight from './components/InformWeight'
import BmiResult from './components/BmiResult'
import Table from './components/Table'
import CalculateButton from './components/CalculateButton'
import Introduction from './components/Introduction'
import ResetButton from './components/ResetButton'

export default function App () {

  const [weight, setWeight] = useState(0)
  const [height, setHeight] = useState(0)
  const [result, setResult] = useState(0)

  return (
    <main className="h-screen">
      <section>
        <Introduction/>
      </section>
      <section className="container mx-auto mt-10 mb-5 flex justify-center items-center">
        <InformWeight weight={weight} setWeight={setWeight}/>
        <InformHeight hight={height} setHeight={setHeight}/>
      </section>
    
      <section className="container mx-auto flex flex-col justify-center items-center" >
        <div className="flex gap-2">
          <CalculateButton weight={weight} height={height} setResult={setResult}/>
          <ResetButton setResult={setResult} setWeight={setWeight} setHeight={setHeight}/>
        </div>

        <BmiResult result={result}/>

        <Table result={result}/>
      </section>
    </main>
  )
}