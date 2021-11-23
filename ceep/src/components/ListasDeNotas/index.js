import React, { Component } from "react";
import CardNotas from "../CardNotas";
import "./style.css";


class ListasDeNotas extends Component {
    render() {
        return (
            <ul className="lista-notas">
                {this.props.notas.map((nota, index) => {
                    return (
                        <li className="lista-notas_item" key={index}>
                            <CardNotas 
                                indice= {index}
                                deleteNota={this.props.deleteNota} 
                                title={nota.title} 
                                text={nota.text} />
                        </li>
                    );
                })}
            </ul>
        );
    } 
}

export default ListasDeNotas;