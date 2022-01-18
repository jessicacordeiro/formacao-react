import React, { Component } from "react";
import ListCategories from "./components/ListCategories";
import ListNote from "./components/ListNote"
import FormRegister from "./components/FormRegister"
import Categories from "./dados/Categories";
import ArrayNotes from "./dados/Notes";
import "./assets/App.css";
import './assets/index.css';

export default class App extends Component{
 
  constructor() {
    super();
    this.categories = new Categories();
    this.notes = new ArrayNotes();
  }

  render() {
    return (
      <section className="conteudo">
        <FormRegister 
          addNotes={this.notes.addNotes.bind(this.notes)}
          categories={this.categories}   
        />
        <main className="conteudo-principal">
          <ListCategories
            addCategory={this.categories.addCategory.bind(this.categories)} 
            categories={this.categories}
          />
          <ListNote
            notes={this.notes}
            deleteNote={this.notes.deleteNote.bind(this.notes)}
          />
        </main>
      </section>
    );
  }
}
