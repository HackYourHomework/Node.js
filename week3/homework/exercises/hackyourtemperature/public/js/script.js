const warningText = document.getElementById("warning");

document.getElementById("form").addEventListener("submit", (e) => {
  const cityInput = document.getElementById("cityName");
  if (cityInput.value.length < 1) {
    console.log("error");
    e.preventDefault();
    warningText.classList.remove("hide");
    setTimeout(() => {
      warningText.classList.add("hide");
    }, 3000);
  }
});
