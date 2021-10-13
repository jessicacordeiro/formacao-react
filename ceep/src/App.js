import React, { Component } from "react";
import ListasDeNotas from "./components/ListasDeNotas";
import FormularioCadastro from "./components/FormularioCadastro";

class App extends Component {
  render() {
    return (
      <section>
        <FormularioCadastro/>
        <ListasDeNotas />
      </section>
    );
  }
}

export default App;
