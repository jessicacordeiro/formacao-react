import React, { Component } from "react";
import CardNote from "../CardNote";
import "./style.css";


class ListNote extends Component {

    constructor() {
        super();
        this.state = {notes: []}
        this._newNotes = this._newNotes.bind(this);
    }

    componentDidMount() {
        this.props.notes.inscribe(this._newNotes);
    }

    componentWillUnmount() {
        this.props.notes.unsubscribe(this._newNotes);
    }

    _newNotes(notes) {
        this.setState({...this.state,notes})
    }

    render() {
        return (
            <ul className="lista-notas">
                {this.state.notes.map((note, index) => {
                    return (
                        <li className="lista-notas_item" key={index}>
                            <CardNote 
                                indice={index}
                                deleteNote={this.props.deleteNote} 
                                title={note.title} 
                                text={note.text}
                                category={note.category} />
                        </li>
                    );
                })}
            </ul>
        );
    } 
}

export default ListNote;