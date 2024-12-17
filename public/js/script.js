class Subject {
    /**
     * This function creates a subject
     * @param {Number} id Identifier of the Subject
     * @param {String} name Name of the subject
     * @param {String} color Color to be displayed with the subject
     */
    constructor(id, name, color) {
        this.id = id;
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
        this.subject_id = subject_id;
        this.date = date;
        this.description = description;
    }

    get displayString() {
        return `[${this.subject.name}] ${this.description}`
    }
}

let subjects = [
    new Subject(0, "Vie de classe", "red"),
    new Subject(1, "Français", "antiquewhite"),
    new Subject(2, "Maths", "deeppink"),
    new Subject(3, "Histoire-Géographie", "antiquewhite"),
    new Subject(4, "Anglais", "deeppink"),
    new Subject(5, "Espagnol", "deeppink")
];

let agenda = Object.entries(
    Object.groupBy(
        [
            new Homework(4, 4, "2024-12-18", "Finir le texte de l'audioguide"),
            new Homework(6, 5, "2024-12-18", "Répondre aux questions I à III"),
            new Homework(7, 0, "2024-12-19", "Préparer le secret santa"),
            new Homework(8, 2, "2024-12-18", "Finir l'exercice 3 fiche V.I"),
            new Homework(9, 2, "2024-12-18", "Faire les exercices 104 et 106"),
        ]
            .sort((a, b) => a.subject_id - b.subject_id),
        ({date}) => date
    ))
    .sort((a, b) => new Date(a[0]) - new Date(b[0])
    );

/*
class App {
    constructor() {
        this.currentView = mainView;
        this.viewOptions;
    }

    renderView(view, options) {
        this.currentView = view;
        this.currentView.render(options);
    }
}

let app = new App();

app.renderView(mainView, {});
*/