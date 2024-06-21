function showCopiedUrlNotification() {
  var copiedElement = document.querySelector(".copied");
  copiedElement.innerText = "Ссылка на этот сайт скопирована в буфер обмена";
  copiedElement.classList.add("visible");
  setTimeout(function () {
    copiedElement.classList.remove("visible");
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
