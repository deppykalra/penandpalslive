const toggle = document.getElementById("theme-toggle");
const body = document.body;
const logo = document.getElementById("site-logo");

toggle.addEventListener("click", () => {
  body.classList.toggle("light");
  body.classList.toggle("dark");

  if (body.classList.contains("light")) {
    toggle.textContent = "☾";
    logo.src = "assets/logo-light.png";
  } else {
    toggle.textContent = "☀︎";
    logo.src = "assets/logo-dark.png";
  }
});
