const form = document.querySelector("form");
form.addEventListener("submit", function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector("#height").value);

  const weight = parseInt(document.querySelector("#weight").value);

  const results = document.querySelector("#results");

  if (height === "" || height < 0 || isNaN(height)) {
    results.innerHTML = "Invalid Height!!";
  } else if (weight === "" || height < 0 || isNaN(weight)) {
    results.innerHTML = "Invalid Weight !!";
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    //toFixed(2) => this is used for 2 values after point value

    //result
    results.innerHTML = `<span>${bmi}</span>`;
  }
});
