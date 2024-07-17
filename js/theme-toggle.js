const input = document.getElementById("dn");
const checkbox = document.querySelector(".toggle");
const sun = document.getElementById("sun");
const moon = document.getElementById("moon");

const toggleChecked = () => {
  input.checked = !input.checked;

  if (input.checked) {
    moon.style.filter = "brightness(2)";
    sun.style.filter = "brightness(1)";
  } else {
    moon.style.filter = "brightness(1)";
    sun.style.filter = "brightness(2)";
  }
};

checkbox.addEventListener("click", toggleChecked);
