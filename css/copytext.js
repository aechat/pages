function extractTextFromHTML(htmlString) {
  var tempElement = document.createElement("div");
  tempElement.innerHTML = htmlString;

  var extractedText = tempElement.innerText;

  return extractedText;
}

function copyTextToClipboard(text) {
  var textarea = document.createElement("textarea");
  textarea.value = text;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  document.body.removeChild(textarea);
}

var markElements = document.querySelectorAll("mark");

markElements.forEach(function (mark) {
  mark.addEventListener("click", function () {
    var extractedText = mark.innerText;

    copyTextToClipboard(extractedText);
    alert("Текст скопирован в буфер обмена!");
  });
});