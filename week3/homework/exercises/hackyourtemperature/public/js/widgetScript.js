// temp converter

const celsiusIcon = document.getElementById("celsius");
const fahrenheitIcon = document.getElementById("fahrenheit");
const cTemp = document.querySelector(".c-temp");
const fTemp = document.querySelector(".f-temp");

celsiusIcon.addEventListener("click", () => {
  cTemp.style.display = "inline";
  celsiusIcon.style.color = "white";
  fTemp.style.display = "none";
  fahrenheitIcon.style.color = "#b0bec5";
});
fahrenheitIcon.addEventListener("click", () => {
  fTemp.style.display = "inline";
  fahrenheitIcon.style.color = "white";
  cTemp.style.display = "none";
  celsiusIcon.style.color = "#b0bec5";
});
