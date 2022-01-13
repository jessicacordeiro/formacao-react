export default class Categorias {
    constructor() {
        this.category = [];
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

    addCategory(newCategory) {
        this.category.push(newCategory);
    }
}