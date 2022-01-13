import React, { Component } from "react";
import ListasDeNotas from "./components/ListasDeNotas/index";
import FormularioCadastro from "./components/FormularioCadastro/index";
import ListaDeCategorias from "./components/ListaCategorias";
import "./assets/App.css";
import './assets/index.css';

export default class App extends Component{
 
  constructor() {
    super();
    this.state = {
      notas:[],
      category: [],
    }
  }

  createdCard(title, text, category) {
    const newCard = { title, text,category };
    const newListNotas = [...this.state.notas,newCard];
    const newState = {
      notas:newListNotas
    }
    this.setState(newState)
  }

  addCategory(nameCategory) {
    const newArrayCategory = [...this.state.category, nameCategory]
    const newState =  {...this.state, category:newArrayCategory};
    this.setState(newState);
  }

  deleteCard(index) {
    let arrayNotas = this.state.notas
    arrayNotas.splice(index, 1);
    this.setState({notas: arrayNotas})
  }

  render() {
    return (
      <section className="conteudo">
        <FormularioCadastro 
          category={this.state.category} 
          createdCard={this.createdCard.bind(this)}
        />
        <main className="conteudo-principal">
          <ListaDeCategorias 
            addCategory={this.addCategory.bind(this)} 
            category={this.state.category}
          />
          <ListasDeNotas notas ={this.state.notas} 
            deleteNota = {this.deleteCard.bind(this)} 
          />
        </main>
      </section>
    );
  }
}
