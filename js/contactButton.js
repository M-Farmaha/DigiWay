document.getElementById("contactButton").addEventListener("click", () => {
  const element = document.getElementById("name");

  element.scrollIntoView({
    behavior: "smooth",
    block: "center",
    inline: "nearest",
  });

  setTimeout(() => {
    element.focus();
  }, 500);
});
