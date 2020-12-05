const newConfirmed = document.getElementById("NewConfirmed");
const totalConfirmed = document.getElementById("TotalConfirmed");
const newDeaths = document.getElementById("NewDeaths");
const totalDeaths = document.getElementById("TotalDeaths");
const newRecovered = document.getElementById("NewRecovered");
const totalRecovered = document.getElementById("TotalRecovered");

fetch(
  `https://api.covid19api.com/summary
  `
)
  .then((response) => response.json())
  .then((data) => {
    global = data.Global;
    newConfirmed.innerText = "New confirmed: " + global.NewConfirmed;
    totalConfirmed.innerText = "Total confirmed: " + global.TotalConfirmed;
    newDeaths.innerText = "New deaths: " + global.NewDeaths;
    totalDeaths.innerText = "Total deaths: " + global.TotalDeaths;
    newRecovered.innerText = "New recovered: " + global.NewRecovered;
    totalRecovered.innerText = "Total recovered: " + global.TotalRecovered;
  })
  .catch((e) => console.log(e));
