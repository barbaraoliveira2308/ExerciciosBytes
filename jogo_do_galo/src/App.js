import { useState } from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <JogoDoGalo />
    </div>
  );
}

function JogoDoGalo(props) {
  const [jogo, setJogo] = useState({
    tabuleiro: [
      ["_", "_", "_"],
      ["_", "_", "_"],
      ["_", "_", "_"],
    ],
    jogadorAtual: "O"
  })
  // let index = 0;
  // index = 3

  function trataDoClique(linha, coluna) {
    //Se clicamos numa casa vazia
    if (jogo.tabuleiro[linha][coluna] === "_") {
      //adicionar uma jogada
      const jogoAtualizado = adicionarJogada(jogo, jogo.jogadorAtual, linha, coluna)
      setJogo(jogoAtualizado)
    }

  }

  function reiniciarJogo() {
    setJogo({
      tabuleiro: [
        ["_", "_", "_"],
        ["_", "_", "_"],
        ["_", "_", "_"],
      ],
      jogadorAtual: "O"
    })
  }


  return (
    <div>
      {verificarFimDoJogo(jogo) === false && <p>Jogador Atual: {jogo.jogadorAtual}</p>}
      {verificarFimDoJogo(jogo) === true && <h3>Jogo Terminado!</h3>}
      {verificarFimDoJogo(jogo) === true && verificarVencedor(jogo) != undefined && <h3>vencedor: {verificarVencedor(jogo)}</h3>}

      <div style={{ display: 'flex', flexDirection: "column" }}>
        {
          jogo.tabuleiro.map((linha, posLinha) => (

            <div style={{ display: 'flex', flexDirection: "row" }}>

              {linha.map((casa, posColuna) => (

                <div
                  onClick={() => trataDoClique(posLinha, posColuna)}
                  style={{ width: "50px", height: "50px", border: "1px solid hotpink" }}>
                  {casa}
                </div>)

              )}

            </div>
          ))
        }
      </div>

      <button onClick={reiniciarJogo}>Restart</button>

    </div>
  )

}


///////////////////////////////////
//Funções Auxiliares que já existem
///////////////////////////////////



function adicionarJogada(jogo, jogador, linha, coluna) {
  const novoTabuleiro = [...jogo.tabuleiro]; // cria um shallow clone do tabuleiro original

  //const novoTabuleiro = structuredClone(jogo.tabuleiro); // cria um deep clone do tabuleiro original

  //const novoTabuleiro = []

  const novoJogo = {
    tabuleiro: novoTabuleiro,
    jogadorAtual: jogo.jogadorAtual === "X" ? "O" : "X", // alterna o jogador atual
  };

  for (let linhas = 0; linhas < jogo.tabuleiro.length; linhas++) {
    novoTabuleiro[linhas] = new Array(jogo.tabuleiro[linhas].length);
    for (let colunas = 0; colunas < jogo.tabuleiro[linhas].length; colunas++) {
      novoTabuleiro[linhas][colunas] = jogo.tabuleiro[linhas][colunas];
    }
  }

  if (novoTabuleiro[linha][coluna] === "_") { // verifica se a posição está vazia
    novoTabuleiro[linha][coluna] = jogador; // adiciona a jogada no tabuleiro
  }
  return novoJogo; // retorna o objeto igual ao original caso a posição já esteja ocupada
}

function verificarVencedor(jogo) {
  const sequencias = obtemSequencias(jogo)
  if (sequencias.includes("XXX")) return "X"
  if (sequencias.includes("OOO")) return "O"
  return undefined
}

function obtemSequencias(jogo) {
  // [XXX", "___", "___", "___", "___", "___", "___", "___"]

  return obtemLinhas(jogo)
    .concat(obtemColunas(jogo))
    .concat(obtemDiagonais(jogo))
}

function obtemLinhas(jogo) {
  let linhas = []

  for (let i = 0; i < jogo.tabuleiro.length; i++) {
    linhas.push(jogo.tabuleiro[i].join(""))
  }
  return linhas
}

function obtemColunas(jogo) {
  let colunas = []

  for (let i = 0; i < jogo.tabuleiro.length; i++) {
    // i = coluna
    let coluna = ""
    for (let j = 0; j < jogo.tabuleiro.length; j++) {
      // j = linha
      coluna += jogo.tabuleiro[j][i]
    }
    colunas.push(coluna)
  }
  return colunas
}


function obtemDiagonais(jogo) {
  let diagonais = ["", ""] // guarda as duas diagonais

  for (let i = 0; i < jogo.tabuleiro.length; i++) {
    diagonais[0] += jogo.tabuleiro[i][i] // diagonal principal
    diagonais[1] += jogo.tabuleiro[i][jogo.tabuleiro.length - 1 - i] // diagonal secundária
  }
  return diagonais
}


function obterJogadasPossiveis(jogo) {
  let jogadasPossiveis = []

  for (let linha = 0; linha < jogo.tabuleiro.length; linha++) {
    for (let coluna = 0; coluna < jogo.tabuleiro[linha].length; coluna++) {
      if (jogo.tabuleiro[linha][coluna] === "_") {
        jogadasPossiveis.push({ linha: linha, coluna: coluna })
      }
    }
  }

  return jogadasPossiveis
}

function verificarFimDoJogo(jogo) {
  return obterJogadasPossiveis(jogo).length === 0
    || verificarVencedor(jogo) !== undefined
}
export default App;
