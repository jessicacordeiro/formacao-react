import React, { Component } from "react";
import "./style.css";

export default class FormRegister extends Component {

  constructor(props) {
    super(props);
    this.title = "";
    this.text = "";
    this.category = "Without Category";
    this.state = {categories: []}

    this._newCategories =  this._newCategories.bind(this);
  }

  componentDidMount() {
    this.props.categories.inscribe(this._newCategories);
  }

  componentWillUnmount() {
    this.props.categories.unsubscribe(this._newCategories);
  }

  _newCategories(categories) {
    this.setState({...this.state, categories})
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

  _addNotes(event) {
    event.preventDefault();
    event.stopPropagation();
    this.props.addNotes(this.title, this.text, this.category);
  }
  
  render() {
    return (
      <form className="form-cadastro" onSubmit={this._addNotes.bind(this)}>
        <select 
          onChange={this._handleChangeCategory.bind(this)} 
          className="form-cadastro_input"
        >
          <option>Without Category</option>

            {this.state.categories.map((category, index) => {
              return <option key={index}>{category}</option>
            })}
        </select>
        <input
          type="text"
          placeholder="Títle"
          className="form-cadastro_input"
          onChange= {this._handleChangeTitle.bind(this)}
        />
        <textarea
          rows={15}
          placeholder="Write your Note..."
          className="form-cadastro_input"
          onChange={this._handleChangeText.bind(this)}
        />
        <button className="form-cadastro_input form-cadastro_submit">
          Created Note
        </button>
      </form>
    );
  }
}