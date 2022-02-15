import React, { Component, Fragment } from 'react';
import './App.css';
import FormRegister from '../src/components/FormRegister/index.jsx';

class App extends Component {
  render() {
    return (
      <Fragment>
        <h1>Formulário de Cadastro</h1>
        <FormRegister />
      </Fragment>
    );
  }
}

export default App;
