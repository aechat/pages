let animationsDisabled = false;

function toggleTheme() {
  var body = document.body;
  var isDarkMode = body.classList.contains("dark");

  if (isDarkMode) {
    body.classList.remove("dark");
    body.classList.add("light");
    localStorage.setItem("theme", "light");
  } else {
    body.classList.remove("light");
    body.classList.add("dark");
    localStorage.setItem("theme", "dark");
  }
}

function setThemeFromLocalStorage() {
  var theme = localStorage.getItem("theme");
  if (theme === "dark") {
    document.body.classList.add("dark");
    document.body.classList.remove("light");
  } else {
    document.body.classList.remove("dark");
    document.body.classList.add("light");
  }

  if (theme === "dark" && !animationsDisabled) {
    temporaryDisableAnimations();
  }
}

function temporaryDisableAnimations() {
  document.documentElement.classList.add("disable-animation");
  animationsDisabled = true;

  setTimeout(function () {
    document.documentElement.classList.remove("disable-animation");

    document.querySelectorAll(".sidemenu").forEach(function (element) {
      element.style.transition = "";
      element.style.visibility = "";
    });
  }, 200);
}

function saveTheme(theme) {
  localStorage.setItem("theme", theme);
}

document.addEventListener("DOMContentLoaded", function () {
  setThemeFromLocalStorage();

  var darkModeMediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
  darkModeMediaQuery.addListener(handleThemeChange);
  handleThemeChange(darkModeMediaQuery);
});

function handleThemeChange(event) {
  if (event.matches) {
    document.body.classList.add("dark");
    document.body.classList.remove("light");
    saveTheme("dark");

    if (!animationsDisabled) {
      temporaryDisableAnimations();
    }
  } else {
    document.body.classList.remove("dark");
    document.body.classList.add("light");
    saveTheme("light");
  }
}
