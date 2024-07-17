const input = document.getElementById("dn");
const checkbox = document.getElementById("toggle");
const sun = document.getElementById("sun");
const moon = document.getElementById("moon");
const themeStylesheet = document.getElementById("theme-stylesheet");

const setLightTheme = () => {
  themeStylesheet.href = "./css/light-theme.css";
  localStorage.setItem("theme", "light");
};

const setDarkTheme = () => {
  themeStylesheet.href = "./css/dark-theme.css";
  localStorage.setItem("theme", "dark");
};

const toggleChecked = () => {
  input.checked = !input.checked;

  if (input.checked) {
    setDarkTheme();
    moon.style.filter = "brightness(2)";
    sun.style.filter = "brightness(1)";
  } else {
    setLightTheme();
    moon.style.filter = "brightness(1)";
    sun.style.filter = "brightness(2)";
  }
};

checkbox.addEventListener("click", toggleChecked);

document.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "dark") {
    input.checked = true;
    setDarkTheme();
  } else {
    input.checked = false;
    setLightTheme();
  }
});
