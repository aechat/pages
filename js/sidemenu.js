let isToggling = false;

function toggleSidemenu() {
  if (isToggling) return;
  isToggling = true;
  var sidemenu = document.querySelector(".sidemenu");
  if (sidemenu.classList.contains("hidden")) {
    sidemenu.classList.remove("hidden");
    sidemenu.classList.add("visible");
  } else {
    sidemenu.classList.remove("visible");
    sidemenu.classList.add("hidden");
  }
  setTimeout(() => {
    isToggling = false;
  }, 5);
}

// блокировка скролла для header и sidemenu

function preventScroll(event) {
  event.preventDefault();
}

const header = document.querySelector("header");
const sidemenu = document.querySelector(".sidemenu");

header.addEventListener("touchmove", preventScroll, { passive: false });
sidemenu.addEventListener("touchmove", preventScroll, { passive: false });

// закрытие sidemenu при нажатии на другой контент

document.addEventListener("click", function (event) {
  if (isToggling) return;
  if (!sidemenu.contains(event.target)) {
    if (sidemenu.classList.contains("visible")) {
      toggleSidemenu();
    }
  }
});

sidemenu.addEventListener("click", function (event) {
  event.stopPropagation();
});

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    if (sidemenu.classList.contains("visible")) {
      toggleSidemenu();
    }
  }
});
