let dateFormatter = new Intl.DateTimeFormat("fr-FR", {
  dateStyle: "full",
  timeZone: "UTC",
});

function displayDate(date) {
  return dateFormatter.format(new Date(date));
}
