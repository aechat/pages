function copyurl() {
  var textArea = document.createElement("textarea");
  textArea.value = window.location.href;
  document.body.appendChild(textArea);
  textArea.select();
  document.execCommand("copy");
  document.body.removeChild(textArea);
  alert("Ссылка на этот сайт скопирован в буфер обмена.");
}
