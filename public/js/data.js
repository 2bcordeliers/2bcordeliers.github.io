let dateFormatter = new Intl.DateTimeFormat("fr-FR", {
    dateStyle: "full",
    timeZone: "UTC",
});

function displayDate(date) {
    return dateFormatter.format(new Date(date));
}

let homeworks = [
    [4, "2024-12-18", "Finir le texte de l'audioguide"],
    [5, "2024-12-18", "Répondre aux questions I à III"],
    [0, "2024-12-19", "Préparer le secret santa"],
    [2, "2024-12-18", "Finir l'exercice 3 fiche V.I"],
    [2, "2024-12-18", "Faire les exercices 104 et 106"],
]
    .map(homework => {
        homework[1] = new Date(homework[1]);
        return homework;
    })
    .sort((a, b) => a[1] - b[1])

homeworks = Object.entries(Object.groupBy(homeworks, homework => homework[1]));