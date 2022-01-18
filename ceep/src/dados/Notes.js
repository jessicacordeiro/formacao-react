export default class ArrayNotes {
    constructor() {
        this.notes = [];
        this._inscribes = [];
    }

    addNotes(title, text, category) {
        const newNote = new Note(title, text, category);
        this.notes.push(newNote);
        this.notification();
    }

    deleteNote(indice) {
        this.notes.splice(indice, 1);
        this.notification();
    }

    inscribe(func) {
        this._inscribes.push(func)
    }

    unsubscribe(func) {
        this._inscribes = this._inscribes.filter(f => f !== func);
    }

    notification() {
        this._inscribes.forEach(func => {
            func(this.notes);
        });
    }
}

class Note {
    constructor(title, text, category) {
        this.title = title;
        this.text = text;
        this.category = category;
    }
}