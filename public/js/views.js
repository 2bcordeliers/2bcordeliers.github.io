let mainElement = document.querySelector("main");

class View {
    /**
     * This function creates a view
     * @param {Function} renderer 
     */
    constructor(renderer) {
        this.renderer = renderer;
    }

    render(options) {
        mainElement.innerHTML = this.renderer(options);
    }
}

let mainView = new View(_ => {
    return `<h1>Agenda</h1>\n<h2>Devoirs</h2>\n
    ${agenda.map(([date, homeworks]) => {
        return `<h3>${displayDate(date)}</h3>\n<ul>
        ${homeworks.map(homework => {
            return `<li id="${homework.id}">${homework.displayString}</li>`
        }).join("\n")}
        </ul>`
    }).join("\n")}`
});
