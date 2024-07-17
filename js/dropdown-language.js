document.addEventListener("DOMContentLoaded", () => {
  const dropdown = document.querySelector(".dropdown");
  const dropbtn = document.querySelector(".dropdown__btn");
  const selectedLanguage = document.getElementById("selectedLanguage");

  dropbtn.addEventListener("click", (event) => {
    event.stopPropagation();
    dropdown.classList.toggle("show");
  });

  window.addEventListener("click", (event) => {
    if (!dropdown.contains(event.target)) {
      dropdown.classList.remove("show");
    }
  });

  window.selectLanguage = (languageCode) => {
    if (selectedLanguage) {
      selectedLanguage.textContent = languageCode;
    }
    dropdown.classList.remove("show");
  };
});
