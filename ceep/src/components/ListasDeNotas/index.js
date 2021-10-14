import React, { Component } from "react";
import CardNotas from "../CardNotas";
import "./style.css";


export class ListasDeNotas extends Component {
    render() {
        return (
            <ul className="lista-notas">
                {Array.of("Jobs", "Jobs", "Studies").map((categoria, index) => {
                    return(
                        <li className="lista-notas_item" key={index}>
                            <CardNotas/>
                        </li>
                    );
                })}
            </ul>
        );
    }
}

export default ListasDeNotas;