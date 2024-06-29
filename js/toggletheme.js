function toggleTheme(theme) {
  var body = document.body;

  // Удалить стиль маркера списка у предыдущего выбранного пункта

  var prevSelected = document.querySelector(
    ".right_sidemenu.visible .selected"
  );
  if (prevSelected) {
    prevSelected.classList.remove("selected");
  }

  if (theme === "dark") {
    body.classList.remove("light");
    body.classList.add("dark");
    localStorage.setItem("theme", "dark");
  } else {
    body.classList.remove("dark");
    body.classList.add("light");
    localStorage.setItem("theme", "light");
  }

  // Применить стиль маркера списка к текущему выбранному пункту

  var currentSelected = document.querySelector(
    `.right_sidemenu.visible a[data-theme="${theme}"]`
  );
  if (currentSelected) {
    currentSelected.classList.add("selected");
  }

  if (theme === "dark" && !animationsDisabled) {
    temporaryDisableAnimations();
  }
}

function setSystemTheme() {
  var theme = event.currentTarget.getAttribute("data-theme");
  if (darkModeMediaQuery.matches) {
    document.body.classList.add("dark");
    document.body.classList.remove("light");
    localStorage.setItem("theme", "dark");

    if (!animationsDisabled) {
      temporaryDisableAnimations();
    }
  } else {
    document.body.classList.remove("dark");
    document.body.classList.add("light");
    localStorage.setItem("theme", "light");
  }

  // Удалить стиль маркера списка у предыдущего выбранного пункта

  var prevSelected = document.querySelector(
    ".right_sidemenu.visible .selected"
  );
  if (prevSelected) {
    prevSelected.classList.remove("selected");
  }

  // Применить стиль маркера списка к текущему выбранному пункту
  var savedTheme = localStorage.getItem("theme");
  var currentSelected = document.querySelector(
    `.right_sidemenu.visible a[data-theme="${savedTheme}"]`
  );
  if (currentSelected) {
    currentSelected.classList.add("selected");
  }
}

// Применить сохранённую тему при загрузке страницы
document.addEventListener("DOMContentLoaded", function () {
  applySavedTheme();
});

// Добавить обработчик изменения системной темы
var darkModeMediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
darkModeMediaQuery.addEventListener("change", handleSystemThemeChange);

// Обработчик клика по пунктам меню
document.querySelectorAll(".right_sidemenu a").forEach(function (item) {
  item.addEventListener("click", function (event) {
    event.preventDefault();
    var theme = event.target.getAttribute("data-theme");
    toggleTheme(theme);
  });
});
