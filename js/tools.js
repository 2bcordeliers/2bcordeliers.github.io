let dateFormatter = new Intl.DateTimeFormat("fr-FR", {
    dateStyle: "full",
    timeZone: "UTC",
})

let currentPosition;

HTMLElement.prototype.pushAfterElement = function() {
    currentPosition.insertAdjacentElement("afterend", this);
    currentPosition = this;
}

/**
 * This function adds a plain text item to the list
 * @param {String} innerHTML The HTML content of the new item
 */
HTMLUListElement.prototype.addItem = function (innerHTML) {
    let item = document.createElement("li");
    item.innerHTML = innerHTML;
    this.appendChild(item);
}