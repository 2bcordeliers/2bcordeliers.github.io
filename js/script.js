
/**
 * This function adds a plain text item to the list
 * @param {String} itemText The text to be placed in the new item
 */
HTMLUListElement.prototype.addItem = function (itemText) {
    let item = document.createElement("li");
    item.innerText = itemText;
    this.appendChild(item);
}

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
     * @param {Date} date Due date of the homework
     * @param {String} description Description of the homework
     */
    constructor(id, subject_id, date, description) {
        this.id = id;
        this.subject = subjects[subject_id];
        this.date = Date(date);
        this.description = description;
    }

    get displayString() {
        return `[${this.subject.name}] ${this.description}`
    }
} 

let elements = {
    homeworksList: document.querySelector("ul#homeworks-list")
}

let subjects = [
    new Subject("Vie de classe", "red"),
    new Subject("Français", "antiquewhite"),
    new Subject("Maths", "deeppink")
];
    
let homeworks = [
    new Homework(0, 2, "2024-12-16", "Faire les exercices 103 et 105 de la page 27"),
    new Homework(1, 2, "2024-12-16", "Faire l'exercice 2 de la page V.I")
];

for (let homework of homeworks) {
    elements.homeworksList.addItem(homework.displayString);
}
