function extractTextFromHTML(htmlString) {
  var tempElement = document.createElement("div");
  tempElement.innerHTML = htmlString;
  var extractedText = tempElement.innerText;
  return extractedText;
}

function showCopiedNotification() {
  var copiedElement = document.querySelector(".copied");
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
    var textarea = document.createElement("textarea");
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    try {
      var successful = document.execCommand("copy");
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
  var markElements = document.querySelectorAll("mark, code");
  markElements.forEach(function (element) {
    element.addEventListener("click", function () {
      var extractedText = element.innerText;
      copyTextToClipboard(extractedText);
    });
  });
});

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
