export default class Categories {
    constructor() {
        this.items = [];
        this._inscribes = [];
    }

    inscribe(func) {
        this._inscribes.push(func)
    }

    unsubscribe(func) {
        this._inscribes = this._inscribes.filter(f => f !== func);
    }

    notification() {
        this._inscribes.forEach(func => {
            func(this.items);
        });
    }

    addCategory = (newCategory) => {
        this.items.push(newCategory);
        this.notification();
    }
}