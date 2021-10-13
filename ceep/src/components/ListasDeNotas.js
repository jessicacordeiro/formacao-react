import { Component } from "react";
import CardNotas from "./CardNotas";

export class ListasDeNotas extends Component {
    render() {
        return (
            <ul>
                {Array.of("Jobs", "Jobs", "Studies").map((categoria) => {
                    return(
                        <li>
                            <div>{categoria}</div>
                            <CardNotas/>
                        </li>
                    );
                })}
            </ul>
        );
    }
}

export default ListasDeNotas;