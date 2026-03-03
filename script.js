document.addEventListener("DOMContentLoaded", function () {

  // ===== Load Header Component =====
  fetch("/penandpalslive/components/header.html")
    .then(response => response.text())
    .then(data => {
      document.getElementById("header-placeholder").innerHTML = data;
      initThemeToggle(); // initialize after header loads
    });

  function initThemeToggle() {
    const toggle = document.getElementById("theme-toggle");
    const body = document.body;
    const logo = document.getElementById("site-logo");

    if (!toggle) return;

    toggle.addEventListener("click", () => {
      body.classList.toggle("light");
      body.classList.toggle("dark");

      if (body.classList.contains("light")) {
        toggle.textContent = "☾";
        logo.src = "/penandpalslive/assets/logo-light.png";
      } else {
        toggle.textContent = "☀︎";
        logo.src = "/penandpalslive/assets/logo-dark.png";
      }
    });
  }

});
