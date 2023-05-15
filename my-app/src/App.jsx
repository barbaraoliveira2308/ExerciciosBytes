import './App.css';
import perguntas from './assets/perguntas.json'
import { useState } from 'react'

import { Teste } from "./Teste"

function App() {
  return (
    <div className="App">

      <Teste />

    </div>
  );

}

function Joker() {

  /*   let pontos = "asjodja"

    function setPontos(string){
      return pontos = string
    }

    setPontos('Barbara')
 */


  const [indice, setIndice] = useState(0)

  const [pontos, setPontos] = useState(0)

  const verficaResposta = (e) => {

    if (e.target.value === perguntas[indice].correta) {
      console.log('certo')
    } else {
      console.log('errado')
    }

    setIndice(indexAnterior => indexAnterior + 1)

  }

  return (

    <div>
      <div className='texto'>
        {perguntas[indice].texto}
      </div>

      <div className='possiveis'>{perguntas[indice].resposta.map(resposta => <button onClick={(e) => verficaResposta(e)} value={resposta} className="respostas">{resposta}</button>)}</div>

      <div>
        <button className="botao" onClick={() => setIndice(previousIndice => previousIndice + 1)}>Próximo</button>
      </div>
    </div >

  )
}

export default App;