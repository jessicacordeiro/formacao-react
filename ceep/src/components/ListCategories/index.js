import { Component } from "react";
import "./style.css";

class ListCategories extends Component {

    constructor() {
        super();
        this.state = {categories: []}
        this._newCategories = this._newCategories.bind(this);
    }

    componentDidMount() {
        this.props.categories.inscribe(this._newCategories.bind(this));
    }

    componentWillUnmount() {
        this.props.categories.unsubscribe(this._newCategories);
    }

    _newCategories(categories) {
        this.setState({...this.state, categories})
    }

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
                    {this.state.categories.map((category, index) => {
                        return (
                            <li 
                                key={index} 
                                className="list-category_item"
                            >
                                {category}
                            </li>
                        );
                    })}
                </ul>
                <input 
                    type="text" 
                    placeholder="Add Category" 
                    onKeyUp={this._handleEventInput.bind(this)}
                />
            </section>
        )
    }
}

export default ListCategories;