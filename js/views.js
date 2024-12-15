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

    destroy() {
        mainElement.innerHTML = "";
    }
}

let mainView = new View(parentElement => {
    parentElement.innerHTML = "<h1>Agenda</h1>\n<h2 id=\"homeworks-heading\">Devoirs</h2>";
    currentPosition = document.querySelector("h2#homeworks-heading")

    for (const [date, homeworks] of agenda) {
        let dateHeading = document.createElement("h3");
        dateHeading.innerText = dateFormatter.format(new Date(date));
        dateHeading.pushAfterElement();
        let homeworkList = document.createElement("ul");
        homeworkList.pushAfterElement();
        for (const homework of homeworks) {
            homeworkList.addItem(`<a href="target.html">${homework.displayString}</a>`);
        }
    }
});