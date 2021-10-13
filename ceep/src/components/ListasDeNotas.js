import { Component } from "react";
import CardNotas from "./CardNotas";

export class ListasDeNotas extends Component {
    render() {
        return (
            <ul>
                <li>
                    <CardNotas/>
                </li>
                <li>
                    <CardNotas/>
                </li>
                <li>
                    <CardNotas/>
                </li>
            </ul>
        );
    }
}

export default ListasDeNotas;