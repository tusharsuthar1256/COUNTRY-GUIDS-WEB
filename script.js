const countryinp = document.querySelector("#input");
const result  = document.querySelector(".result");
document.querySelector("button").addEventListener("click", () => {
  let countryName = countryinp.value;

  const url = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`;

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
    //   console.log(data[0]);
    //   console.log(data[0].flags.svg);
    //   console.log(data[0].name.common);
    //   console.log(data[0].capital[0]);
    //   console.log(data[0].continents[0]);
    //   console.log(data[0].population);
    //   console.log(Object.keys(data[0].currencies)[0]);
    //   console.log(Object.values(data[0].languages).toString().split(",").join(", "));

    result.innerHTML = `
    <img src=${data[0].flags.svg} class="flag-img">
    <h2>${data[0].name.common}</h2>
    <div class="wrapper">
        <div class="data-wrapper">
            <h3>Capital:</h3>
            <span>${data[0].capital[0]}</span>
        </div>
    </div>
    <div class="wrapper">
        <div class="data-wrapper">
            <h3>Continent</h3>
            <span>${data[0].continents[0]}</span>
        </div>
    </div>
    <div class="wrapper">
        <div class="data-wrapper">
            <h3>Population</h3>
            <span>${data[0].population}</span>
        </div>
    </div>
    <div class="wrapper">
        <div class="data-wrapper">
            <h3>Currency</h3>
            <span>${Object.keys(data[0].currencies)[0]}</span>
        </div>
    </div>
    <div class="wrapper">
        <div class="data-wrapper">
            <h3>Common Language</h3>
            <span>${Object.values(data[0].languages).toString().split(",").join(", ")}</span>
        </div>
    </div `
    });
});
