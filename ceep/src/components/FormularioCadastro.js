import React, { Component } from "react";

export class FormularioCadastro extends Component {
    render() {
        return(
            <section>
                <form>
                <input type= "text" placeholder= "Título" />
                <textarea placeholder= "Escreva sua nota"/>
                <button>Criar Nota</button>
                </form>
            </section>
        );
    }
}

export default FormularioCadastro;