let homeworksList = document.querySelector("ul#homeworks-list");

async function loadData() {
    let response = await fetch("data.json");
    let data = await response.json();
    return [data.subjects, data.homeworks];
}

(async function () {
    let [subjects, homeworks] = await loadData();
    for (let homework of homeworks) {
        let subject = subjects.find(subject => subject.id === homework.subject_id);
        let homeworkListItem = document.createElement("li");
        homeworkListItem.innerText = `[${subject.name}]: ${homework.description}`;
        homeworksList.appendChild(homeworkListItem);
    }
    console.log(subjects, homeworks);
})();