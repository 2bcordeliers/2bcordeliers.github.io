(async function () {
    let response = await fetch("data.json");
    let data = await response.json();
    console.log(data);
})();