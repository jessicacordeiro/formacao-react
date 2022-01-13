export default class Categorias {
    constructor() {
        this.items = [];
        this._inscritos = [];
    }

    inscrever(func) {
        this._inscritos.push(func)
    }

    notificar() {
        this._inscritos.forEach(func => {
            func(this.category);
        });
    }

    addCategory = (newCategory) => {
        this.items.push(newCategory);
    }
}