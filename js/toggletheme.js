function toggleTheme(theme) {
  const body = document.body;
  if (theme === "light") {
    body.classList.remove("dark");
    body.classList.add("light");
  } else if (theme === "dark") {
    body.classList.remove("light");
    body.classList.add("dark");
  } else if (theme === "system") {
    applySystemTheme();
  }
  localStorage.setItem("theme", theme);
  document
    .querySelectorAll(".right_sidemenu button")
    .forEach((item) => item.classList.remove("selected"));
  document.querySelector(`[data-theme="${theme}"]`).classList.add("selected");
}

function applySystemTheme() {
  const theme = darkModeMediaQuery.matches ? "dark" : "light";
  const body = document.body;
  if (theme === "dark") {
    body.classList.remove("light");
    body.classList.add("dark");
  } else {
    body.classList.remove("dark");
    body.classList.add("light");
  }
}

function setSystemTheme() {
  localStorage.setItem("theme", "system");
  applySystemTheme();
  document
    .querySelectorAll(".right_sidemenu button")
    .forEach((item) => item.classList.remove("selected"));
  document.querySelector(`[data-theme="system"]`).classList.add("selected");
}

document.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "light" || savedTheme === "dark") {
    toggleTheme(savedTheme);
  } else if (savedTheme === "system" || savedTheme === null) {
    setSystemTheme();
  }
});

const darkModeMediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
darkModeMediaQuery.addEventListener("change", () => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "system") {
    applySystemTheme();
  }
});
