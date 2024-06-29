let isToggling = false;

function toggleSidemenu(menu) {
  if (isToggling) return;
  isToggling = true;
  const sidemenu = document.querySelector(menu);
  if (sidemenu.classList.contains("hidden")) {
    if (window.innerWidth >= 800 || !document.querySelector(".visible")) {
      sidemenu.classList.remove("hidden");
      sidemenu.classList.add("visible");
    } else {
      const currentlyVisibleSidemenu = document.querySelector(".visible");
      currentlyVisibleSidemenu.classList.remove("visible");
      currentlyVisibleSidemenu.classList.add("hidden");
      sidemenu.classList.remove("hidden");
      sidemenu.classList.add("visible");
    }
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
const leftSidemenu = document.querySelector(".left_sidemenu");
const rightSidemenu = document.querySelector(".right_sidemenu");

header.addEventListener("touchmove", preventScroll, {passive: false});
leftSidemenu.addEventListener("touchmove", preventScroll, {passive: false});
rightSidemenu.addEventListener("touchmove", preventScroll, {passive: false});

// закрытие sidemenu при нажатии на другой контент

document.addEventListener("click", function (event) {
  if (isToggling) return;
  const leftMenuVisible = leftSidemenu.classList.contains("visible");
  const rightMenuVisible = rightSidemenu.classList.contains("visible");
  if (leftMenuVisible || rightMenuVisible) {
    if (
      !leftSidemenu.contains(event.target) &&
      !rightSidemenu.contains(event.target)
    ) {
      if (leftMenuVisible && rightMenuVisible) {
        toggleSidemenu(".left_sidemenu");
        toggleSidemenu(".right_sidemenu");
      } else {
        if (leftMenuVisible) {
          toggleSidemenu(".left_sidemenu");
        }
        if (rightMenuVisible) {
          toggleSidemenu(".right_sidemenu");
        }
      }
    }
  }
});

leftSidemenu.addEventListener("click", function (event) {
  event.stopPropagation();
});

rightSidemenu.addEventListener("click", function (event) {
  event.stopPropagation();
});

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    if (leftSidemenu.classList.contains("visible")) {
      toggleSidemenu(".left_sidemenu");
    }
    if (rightSidemenu.classList.contains("visible")) {
      toggleSidemenu(".right_sidemenu");
    }
  }
});

// закрытие sidemenu при ширине экрана меньше 800px

window.addEventListener("resize", function () {
  if (window.innerWidth < 800) {
    leftSidemenu.classList.remove("visible");
    leftSidemenu.classList.add("hidden");
    rightSidemenu.classList.remove("visible");
    rightSidemenu.classList.add("hidden");
    if (leftSidemenu.classList.contains("visible")) {
      toggleSidemenu(".left_sidemenu");
    }
    if (rightSidemenu.classList.contains("visible")) {
      toggleSidemenu(".right_sidemenu");
    }
  }
});

// дата коммита

async function getLastCommitDate() {
  const owner = "aechat";
  const repo = "pages";

  const currentUrl = window.location.pathname;
  const filePath = currentUrl.startsWith("/")
    ? currentUrl.substring(1)
    : currentUrl;

  const url = `https://api.github.com/repos/${owner}/${repo}/commits?path=${filePath}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`${response.status}`);
    }
    const commits = await response.json();
    if (commits.length === 0) {
      document.getElementById("commit_date").textContent =
        "Дата изменения\nвременно недоступна";
      return;
    }
    const lastCommitDate = new Date(commits[0].commit.author.date);
    document.getElementById("commit_date").textContent =
      "Дата последнего изменения:\n" + lastCommitDate.toLocaleString();
  } catch (error) {
    document.getElementById("commit_date").textContent =
      "Ошибка получения даты!\n" + error;
  }
}

getLastCommitDate();
