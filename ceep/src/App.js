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
    this.categorias = new Categorias();
    this.notas = new ArrayNotas();
  }

  render() {
    return (
      <section className="conteudo">
        <FormularioCadastro 
          category={this.categorias.items} 
          createdCard={this.notas.createdCard}
        />
        <main className="conteudo-principal">
          <ListaDeCategorias 
            addCategory={this.categorias.addCategory.bind(this.categorias)} 
            category={this.categorias.items}
          />
          <ListasDeNotas notas ={this.notas.notas} 
            deleteNota = {this.notas.deleteCard} 
          />
        </main>
      </section>
    );
  }
}
