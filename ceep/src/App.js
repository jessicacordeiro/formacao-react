import React, { Component } from "react";
import ListasDeNotas from "./components/ListasDeNotas/index";
import FormularioCadastro from "./components/FormularioCadastro/index";
import ListaDeCategorias from "./components/ListaCategorias";
import "./assets/App.css";
import './assets/index.css';
import Categorias from "./dados/Categorias";
import ArrayNotas from "./dados/Notas";

export default class App extends Component{
 
  constructor() {
    super();
    this.category = new Categorias();
    this.notas = new ArrayNotas();
  }

  render() {
    return (
      <section className="conteudo">
        <FormularioCadastro 
          category={this.category.category} 
          createdCard={this.notas.createdCard}
        />
        <main className="conteudo-principal">
          <ListaDeCategorias 
            addCategory={this.notas.addCategory} 
            category={this.category.category}
          />
          <ListasDeNotas notas ={this.notas.notas} 
            deleteNota = {this.notas.deleteCard} 
          />
        </main>
      </section>
    );
  }
}
