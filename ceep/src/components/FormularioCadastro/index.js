import React, { Component } from "react";
import "./style.css";

export default class FormularioCadastro extends Component {

  constructor(props) {
    super(props);
    this.title = "";
    this.text = "";
    this.category = "Sem Categoria";
  }

  _handleChangeCategory(event) {
    event.stopPropagation();
    this.category = event.target.value;
  }

  _handleChangeTitle(event) {
    event.stopPropagation();
    this.title = event.target.value;
  }

  _handleChangeText(event) {
    event.stopPropagation();
    this.text = event.target.value;
  }

  _createCard(event) {
    event.preventDefault();
    event.stopPropagation();
    this.props.createdCard(this.title, this.text, this.category);
  }
  
  render() {
    return (
      <form className="form-cadastro" onSubmit={this._createCard.bind(this)}>
        <select 
          onChange={this._handleChangeCategory.bind(this)} 
          className="form-cadastro_input"
        >
          <option>Sem Categoria</option>
            {this.props.category.map(categorys => {
              return <option>{categorys}</option>
            })}
        </select>
        <input
          type="text"
          placeholder="Título"
          className="form-cadastro_input"
          onChange= {this._handleChangeTitle.bind(this)}
        />
        <textarea
          rows={15}
          placeholder="Escreva sua nota..."
          className="form-cadastro_input"
          onChange={this._handleChangeText.bind(this)}
        />
        <button className="form-cadastro_input form-cadastro_submit">
          Criar Nota
        </button>
      </form>
    );
  }
}