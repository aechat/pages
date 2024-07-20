document.addEventListener("DOMContentLoaded", function () {
  const containers = document.querySelectorAll(".content");
  containers.forEach((container, containerIndex) => {
    const h2s = container.querySelectorAll("summary");
    [...h2s].forEach((element, index) => {
      if (
        element.tagName === "SUMMARY" &&
        !element.parentElement.closest("details > summary")
      ) {
        element.id = `${containerIndex + 1}.${index + 1}`;
      }
      element.textContent = `${containerIndex + 1}.${index + 1}. ${element.textContent}`;
    });
  });
});

// document.addEventListener("DOMContentLoaded", function() {
//   const videos = document.querySelectorAll('video');

//   videos.forEach(video => {
//       video.setAttribute('autoplay', '');
//       video.setAttribute('preload', 'auto');
//   });

//   const observer = new IntersectionObserver(entries => {
//       entries.forEach(entry => {
//           const video = entry.target;
//           if (entry.isIntersecting) {
//               video.play();
//           } else {
//               video.pause();
//           }
//       });
//   }, {
//       threshold: 0.25
//   });

//   videos.forEach(video => {
//       observer.observe(video);
//   });
// });
// document.addEventListener("DOMContentLoaded", () => {
//   wrapContent();
//   const undoButton = document.querySelector("[data-action='undo-spoilers']");
//   if (undoButton) {
//     undoButton.addEventListener("click", undoSpoilers);
//   }
// });

// function wrapContent() {
//   const contentAreas = document.querySelectorAll(".content");
//   contentAreas.forEach((container) => {
//     const h2Elements = Array.from(container.querySelectorAll("h2"));
//     h2Elements.forEach((h2, index) => {
//       const nextH2 = h2Elements[index + 1];
//       const contentToSpread = [];
//       let currentElement = h2.nextElementSibling;
//       while (currentElement && currentElement !== nextH2) {
//         contentToSpread.push(currentElement);
//         currentElement = currentElement.nextElementSibling;
//       }
//       const details = document.createElement("details");
//       details.classList.add("content_spoiler");
//       const summary = document.createElement("summary");
//       summary.textContent = h2.textContent;
//       details.appendChild(summary);
//       details.append(...contentToSpread);
//       h2.parentNode.insertBefore(details, h2);
//     });
//     container.dataset.spoiled = "true";
//   });
// }

// function undoSpoilers() {
//   const contentAreas = document.querySelectorAll(".content");
//   contentAreas.forEach((content) => {
//     const spoilers = content.querySelectorAll("details.content_spoiler");
//     spoilers.forEach((spoiler) => {
//       const summary = spoiler.querySelector("summary");
//       const h2 = document.createElement("h2");
//       h2.textContent = summary.textContent;
//       content.insertBefore(h2, spoiler);
//       const contentToAppend = Array.from(spoiler.querySelectorAll(":scope > summary ~ *"));
//       contentToAppend.forEach((node) => {
//         content.insertBefore(node, spoiler);
//       });
//       content.removeChild(spoiler);
//     });
//   });
//   this.classList.remove("selected");
// }



async function getLastCommitDate() {
  const owner = "aechat";
  const repo = "links";

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

function showCopiedUrlNotification() {
  var copiedElement = document.querySelector(".copied");
  copiedElement.innerText = "Ссылка на этот сайт скопирована в буфер обмена";
  copiedElement.classList.remove("hidden");
  copiedElement.classList.add("visible");
  setTimeout(function () {
    copiedElement.classList.remove("visible");
    copiedElement.classList.add("hidden");
  }, 2500);
}

function copyURL() {
  var textArea = document.createElement("textarea");
  textArea.value = window.location.href;
  document.body.appendChild(textArea);
  textArea.select();
  document.execCommand("copy");
  document.body.removeChild(textArea);
  showCopiedUrlNotification();
}

document.addEventListener("DOMContentLoaded", function () {
  var logoElement = document.querySelector(".logo");
  if (logoElement) {
    logoElement.addEventListener("click", copyURL);
  }
});

function extractTextFromHTML(htmlString) {
  let tempElement = document.createElement("div");
  tempElement.innerHTML = htmlString;
  let extractedText = tempElement.innerText;
  return extractedText;
}

function showCopiedNotification() {
  let copiedElement = document.querySelector(".copied");
  copiedElement.innerText = "Текст скопирован в буфер обмена";
  copiedElement.classList.remove("hidden");
  copiedElement.classList.add("visible");

  setTimeout(function () {
    copiedElement.classList.remove("visible");
    copiedElement.classList.add("hidden");
  }, 2500);
}

function copyTextToClipboard(text) {
  if (navigator.clipboard) {
    navigator.clipboard.writeText(text).then(
      function () {
        showCopiedNotification();
      },
      function (err) {
        alert("Ошибка при копировании текста: " + err);
      }
    );
  } else {
    let textarea = document.createElement("textarea");
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    try {
      let successful = document.execCommand("copy");
      if (successful) {
        showCopiedNotification();
      } else {
        alert("Не удалось скопировать текст :(");
      }
    } catch (err) {
      alert("Ошибка при копировании текста: " + err);
    }
    document.body.removeChild(textarea);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  let markElements = document.querySelectorAll("mark, code");
  markElements.forEach(function (element) {
    element.addEventListener("click", function () {
      let extractedText = element.innerText;
      copyTextToClipboard(extractedText);
    });
  });
});

// разделение слов для того, чтобы всё влезло

document.addEventListener("DOMContentLoaded", function () {
  let markElements = document.querySelectorAll("mark");
  markElements.forEach(function (element) {
    let text = element.innerText;
    let words = text.split(/(?<=\))\s*/);

    element.innerHTML = "";
    let fragment = document.createDocumentFragment();
    let mark = document.createElement("mark");
    mark.style.backgroundColor = "transparent";
    words.forEach(function (word, index) {
      if (index > 0) {
        mark.appendChild(document.createTextNode(" "));
      }
      mark.appendChild(document.createTextNode(word));
    });
    fragment.appendChild(mark);
    element.appendChild(fragment);
  });
});
(function (m, e, t, r, i, k, a) {
  m[i] =
    m[i] ||
    function () {
      (m[i].a = m[i].a || []).push(arguments);
    };
  m[i].l = 1 * new Date();
  for (var j = 0; j < document.scripts.length; j++) {
    if (document.scripts[j].src === r) {
      return;
    }
  }
  (k = e.createElement(t)),
    (a = e.getElementsByTagName(t)[0]),
    (k.async = 1),
    (k.src = r),
    a.parentNode.insertBefore(k, a);
})(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
ym(96346999, "init", {
  clickmap: true,
  trackLinks: true,
  accurateTrackBounce: true,
  webvisor: true,
});

document.addEventListener("DOMContentLoaded", function () {
  const images = document.querySelectorAll("img");

  images.forEach((image) => {
    image.addEventListener("click", function () {
      if (this.style.transform.includes("scale(1.5)")) {
        this.style.transform = "scale(1)";
        this.style.filter = "drop-shadow(0px 0px 0px transparent)";
        this.style.cursor = "zoom-in";
      } else {
        this.style.transform = "scale(1.5)";
        this.style.filter = "drop-shadow(0px 0px 20px var(--for-shadow))";
        this.style.cursor = "zoom-out";
      }
    });
  });
});
function createRipple(event) {
  const ripple = document.createElement("span");
  ripple.className = "ripple";
  const rect = event.currentTarget.getBoundingClientRect();
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;
  const size = Math.max(rect.width, rect.height) * 2;
  ripple.style.width = ripple.style.height = size + "px";
  ripple.style.left = x - size / 2 + "px";
  ripple.style.top = y - size / 2 + "px";
  event.currentTarget.appendChild(ripple);
  setTimeout(() => {
    ripple.style.transform = "scale(2)";
    setTimeout(() => {
      ripple.remove();
    }, 600);
  }, 10);
}

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      const offset = 80;
      window.scrollTo({
        top: targetElement.offsetTop - offset,
        behavior: "smooth",
      });
    }
  });
});

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
