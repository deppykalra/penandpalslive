// Load header
fetch("components/header.html")
  .then(res => res.text())
  .then(data => {
    document.getElementById("header-placeholder").innerHTML = data;

    const toggle = document.getElementById("theme-toggle");

    toggle.addEventListener("click", () => {
      document.body.classList.toggle("dark");
      document.body.classList.toggle("light");
      localStorage.setItem("theme", document.body.className);
    });
  });

// Load footer
fetch("components/footer.html")
  .then(res => res.text())
  .then(data => {
    document.getElementById("footer-placeholder").innerHTML = data;
  });

// Load saved theme
const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
  document.body.className = savedTheme;
} else {
  document.body.className = "dark";
}
