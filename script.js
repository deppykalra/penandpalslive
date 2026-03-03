document.addEventListener("DOMContentLoaded", function () {

  const toggle = document.getElementById("theme-toggle");
  const body = document.body;
  const logo = document.getElementById("site-logo");

  if (!toggle) return;

  toggle.addEventListener("click", () => {

    body.classList.toggle("light");
    body.classList.toggle("dark");

    const isSubPage = window.location.pathname.includes("gaurav-kapoor-live-warsaw");

    if (body.classList.contains("light")) {
      toggle.textContent = "☾";
      if (logo) {
        logo.src = isSubPage ? "../assets/logo-light.png" : "assets/logo-light.png";
      }
    } else {
      toggle.textContent = "☀︎";
      if (logo) {
        logo.src = isSubPage ? "../assets/logo-dark.png" : "assets/logo-dark.png";
      }
    }

  });

});
