// ==========================
// LOAD HEADER
// ==========================

fetch("/components/header.html")
  .then(res => res.text())
  .then(data => {
    document.getElementById("header-placeholder").innerHTML = data;

    const toggle = document.getElementById("theme-toggle");
    const logo = document.getElementById("site-logo");

    function setTheme(theme) {
      document.body.classList.remove("dark", "light");
      document.body.classList.add(theme);

      if (logo) {
        if (theme === "light") {
          logo.src = "/assets/logo-light.png";
        } else {
          logo.src = "/assets/logo-dark.png";
        }
      }

      localStorage.setItem("theme", theme);
    }

    // Toggle click
    toggle.addEventListener("click", () => {
      const newTheme = document.body.classList.contains("dark")
        ? "light"
        : "dark";
      setTheme(newTheme);
    });

    // Apply saved theme AFTER header loads
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
  });


// ==========================
// LOAD FOOTER
// ==========================

fetch("/components/footer.html")
  .then(res => res.text())
  .then(data => {
    document.getElementById("footer-placeholder").innerHTML = data;
  });
