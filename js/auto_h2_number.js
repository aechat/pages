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
      const detailsElement = element.closest("details");
      if (detailsElement) {
        const copyButton = document.createElement("button");
        copyButton.classList.add("copy_button");
        copyButton.textContent = "Поделиться";
        copyButton.addEventListener("click", function () {
          const summaryId = element.id;
          const summaryLink = window.location.href.split("#")[0] + "#" + summaryId;
          navigator.clipboard.writeText(summaryLink);
          showCopiedSummaryUrlNotification();
        });
        detailsElement.insertBefore(copyButton, detailsElement.firstChild);
      }
    });
  });
});

function showCopiedSummaryUrlNotification() {
  var copiedElement = document.querySelector(".copied");
  copiedElement.innerText = "Ссылка на пункт скопирована в буфер обмена";
  copiedElement.classList.remove("hidden");
  copiedElement.classList.add("visible");
  setTimeout(function () {
    copiedElement.classList.remove("visible");
    copiedElement.classList.add("hidden");
  }, 2500);
}
