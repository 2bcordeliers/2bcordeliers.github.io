let dateFormatter = new Intl.DateTimeFormat("fr-FR", {
    dateStyle: "full",
    timeZone: "UTC",
});

function displayDate(date) {
    return dateFormatter.format(new Date(date));
}

/**
 * Map containing all homeworks
 * @type {Map<string, string>}
 */
let homeworks = new Map(
    [
        ["965f-82-1a", "Revoir les définitions de la sélection naturelle et de la dérive génétique"],
        ["965f-82-cf", "Apporter le manuel"],
        ["36a2-23-46", "Savoir présenter le poème"],
        ["36a2-23-83", "Apprendre le vocabulaire de la séance 1"],
        ["36a2-23-00", "Apprendre le poème jusqu'à emplearlas"],
        ["b750-d3-bc", "Faire la fiche \"The Natives Today\""]
    ]
);

/**
 * Map containing all dates
 * @type {Map<string, string>}
 */
let dates = new Map(
    [
        ["965f", "2025-01-07"],
        ["36a2", "2025-01-08"],
        ["ff79", "2025-01-09"],
        ["2642", "2025-01-10"],
        ["b750", "2025-01-13"],
        ["e175", "2025-01-14"],
        ["2f6f", "2025-01-15"],
        ["bce7", "2025-01-16"],
        ["1e3d", "2025-01-17"]
    ]
)

/**
 * Map containing all subjects
 * @type {Map<string, string>}
 */
let subjects = new Map(
    [
        ["5c", "Vie de classe"],
        ["9e", "Français"],
        ["da", "Maths"],
        ["aa", "Histoire"],
        ["ed", "Géographie"],
        ["99", "EMC"],
        ["1a", "Anglais"],
        ["23", "Espagnol"],
        ["2a", "2025-01-17"],
        ["c3", "Physique"],
        ["05", "Chimie"],
        ["82", "SVT"],
        ["ac", "SES"],
        ["26", "SNT"],
        ["1d", "Sport"],
        ["fc", "AP Maths"],
        ["27", "AP Français"],
        ["ff", "Euro"],
        ["d3", "DNL"],
        ["46", "Cambridge"]
    ]
)
