import { Component } from "react";
import "./style.css";

class ListaDeCategorias extends Component {
    _handleEventInput(e) {
        if(e.key == "Enter") {
            let valueCategory = e.target.value;
            this.props.addCategory(valueCategory);
        }
    }
    render() {
        return (
            <section className="list-category"> 
                <ul className="list-category_list">
                    {this.props.category.map((category, index) => {
                        return <li key={index} className="list-category_item">{category}</li>;
                    })}
                </ul>
                <input 
                    type="text" 
                    placeholder="Adicionar Categoria" 
                    onKeyUp={this._handleEventInput.bind(this)}
                />
            </section>
        )
    }
}

export default ListaDeCategorias;