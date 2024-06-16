function extractTextFromHTML(htmlString) {
  var tempElement = document.createElement("div");
  tempElement.innerHTML = htmlString;
  var extractedText = tempElement.innerText;
  return extractedText;
}

function copyTextToClipboard(text) {
  if (navigator.clipboard) {
    navigator.clipboard.writeText(text).then(
      function () {
        alert("Текст скопирован в буфер обмена!");
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
      var msg = successful
        ? "Текст скопирован в буфер обмена!"
        : "Не удалось скопировать текст :(";
      alert(msg);
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
