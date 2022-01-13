export default class ArrayNotas {
    constructor() {
        this.notas = [];
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

    createdCard(title, text, category) {
        const newCard = new Card(title, text, category);
        this.notas.push(newCard);
    }

    deleteCard(index) {
        this.notas.splice(index, 1);
    }
}

class Card {
    constructor(title, text, category) {
        this.title = title;
        this.text = text;
        this.category = category;
    }
}