
import fruta from './imagens/fruta.jpg';
import React, { Component } from "react"


export default class App extends Component{

  state={
    nome:'Thainá Monteiro',
    idade: 23,
    comidaFavorita: 'Pizza',
    musicas:["Don't stop believin","Sol de paz", "Vienna"]
  }
  render(){
    return(
      <div>
        <h1>{this.state.nome}</h1>
        <h2>{this.state.idade}</h2>
        <h3>{this.state.comidaFavorita}</h3>
        <ul>
          <li>{this.state.musicas[0]}</li>
          <li>{this.state.musicas[1]}</li>
          <li>{this.state.musicas[2]}</li>
        </ul>
        <img src={fruta} alt="maçã" />
        
      </div>
    )
  }
}
