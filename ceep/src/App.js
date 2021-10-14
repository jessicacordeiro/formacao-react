import React, { Component } from "react";
import ListasDeNotas from "./components/ListasDeNotas/index";
import FormularioCadastro from "./components/FormularioCadastro/index";
import "./assets/App.css";
import './assets/index.css';

class App extends Component {
  render() {
    return (
      <section className="conteudo">
        <FormularioCadastro/>
        <ListasDeNotas />
      </section>
    );
  }
}

export default App;
