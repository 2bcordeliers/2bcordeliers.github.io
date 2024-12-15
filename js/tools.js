let dateFormatter = new Intl.DateTimeFormat("fr-FR", {
    dateStyle: "full",
    timeZone: "UTC",
})

/**
 * This function adds a plain text item to the list
 * @param {String} innerHTML The HTML content of the new item
 * @returns {HTMLLIElement} The freshly created list item
 */
HTMLUListElement.prototype.addItem = function (innerHTML, id) {
    let item = document.createElement("li");
    item.id = id
    item.innerHTML = innerHTML;
    this.appendChild(item);
    return item;
}