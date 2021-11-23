import React, { Component } from "react";
import ListasDeNotas from "./components/ListasDeNotas/index";
import FormularioCadastro from "./components/FormularioCadastro/index";
import "./assets/App.css";
import './assets/index.css';

export default class App extends Component{
 
  constructor() {
    super();
    this.state = {
      notas:[]
    }
  }

  createdCard(title, text) {
    const newCard = { title, text };
    const newListNotas = [...this.state.notas,newCard];
    const newState = {
      notas:newListNotas
    }
    this.setState(newState)
  }

  deleteCard(index) {
    let arrayNotas = this.state.notas
    arrayNotas.splice(index, 1);
    this.setState({notas: arrayNotas})
  }

  render() {
    return (
      <section className="conteudo">
        <FormularioCadastro createdCard={this.createdCard.bind(this)}/>
        <ListasDeNotas notas ={this.state.notas} 
          deleteNota = {this.deleteCard.bind(this)} 
        />
      </section>
    );
  }
}
