class Subject {
    /**
     * This function creates a subject
     * @param {String} name Name of the subject
     * @param {String} color Color to be displayed with the subject
     */
    constructor(name, color) {
        this.name = name;
        this.color = color;
    }
}

class Homework {
    /**
     * This function creates a homework
     * @param {Number} id Identifier of the homework
     * @param {Number} subject_id Identifier of the subject
     * @param {String} date Due date of the homework with format "YYYY-MM-DD"
     * @param {String} description Description of the homework
     */
    constructor(id, subject_id, date, description) {
        this.id = id;
        this.subject = subjects[subject_id];
        this.date = date;
        this.description = description;
    }

    get displayString() {
        return `[${this.subject.name}] ${this.description}`
    }
}

let subjects = [
    new Subject("Vie de classe", "red"),
    new Subject("Français", "antiquewhite"),
    new Subject("Maths", "deeppink"),
    new Subject("Histoire-Géographie", "antiquewhite"),
    new Subject("Anglais", "deeppink"),
    new Subject("Espagnol", "deeppink")
];
    
let agenda = Object.entries(
    Object.groupBy([
        new Homework(4, 4, "2024-12-16", "Finir le texte de l'audioguide"),
        new Homework(5, 1, "2024-12-17", "Faire l'introduction (optionnel)"),
        new Homework(6, 4, "2024-12-18", "Répondre aux questions I à III"),
        new Homework(7, 0, "2024-12-19", "Préparer le secret santa"),
        new Homework(8, 2, "2024-12-18", "Finir l'exercice 3 fiche V.I"),
        new Homework(9, 2, "2024-12-18", "Faire les exercices 104 et 106"),
        
    ], ({ date }) => date))
        .sort((a, b) => new Date(b[0].date) - new Date(a[0].date)
);