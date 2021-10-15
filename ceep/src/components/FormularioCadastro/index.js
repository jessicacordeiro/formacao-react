import React, { Component } from "react";
import "./style.css";

export default class FormularioCadastro extends Component {

  constructor(props) {
    super(props);
    this.title = "";
    this.text = "";
    this.handlerChangeTitle = this.handlerChangeTitle.bind(this);
  }

  handlerChangeTitle(evento) {
    this.title = evento.target.value;
  }
  
  render() {
    return (
      <form className="form-cadastro">
        <input
          type="text"
          placeholder="Título"
          className="form-cadastro_input"
          onChange= {this.handlerChangeTitle}
        />
        <textarea
          rows={15}
          placeholder="Escreva sua nota..."
          className="form-cadastro_input"
        />
        <button className="form-cadastro_input form-cadastro_submit">
          Criar Nota
        </button>
      </form>
    );
  }
}