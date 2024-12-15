let mainElement = document.querySelector("main");

class View {
    /**
     * This function creates a view
     * @param {Function} renderer 
     */
    constructor(renderer) {
        this.renderer = renderer;
    }

    render() {
        this.renderer(mainElement);
    }
}

let mainView = new View(parentElement => {
    parentElement.innerHTML = "<h1>Agenda</h1>\n<h2>Devoirs</h2>";

    for (const [date, homeworks] of agenda) {
        parentElement.innerHTML += `<h3>${dateFormatter.format(new Date(date))}</h3>`
        let homeworkList = document.createElement("ul");
        parentElement.appendChild(homeworkList);
        homeworks.forEach(homework => {
            let item = homeworkList.addItem(`<a href="target.html">${homework.displayString}</a>`, homework.id);
            console.log(item)
            item.addEventListener("click", event => {
                event.preventDefault();
                app.viewOptions = homework;
                app.displayedView = homeworkDetails;
            })
        });
        }
    }
);

let homeworkDetails = new View(parentElement => {
    let homework = app.viewOptions;
    parentElement.innerHTML = "<h1>Agenda</h1>\n<h2>Devoirs</h2>";
    parentElement.innerHTML += `<h3>${homework.description}</h3>`;
});
