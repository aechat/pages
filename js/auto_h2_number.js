document.addEventListener("DOMContentLoaded", function () {
  const containers = document.querySelectorAll(".content");
  containers.forEach((container, containerIndex) => {
    const h2s = container.querySelectorAll("h2");
    const summaries = container.querySelectorAll("details.content_spoiler");
    [...h2s, ...summaries].forEach((element, index) => {
      element.textContent = `${containerIndex + 1}.${index + 1}. ${element.textContent}`;
      element.id = `${containerIndex + 1}.${index + 1}`;
      if (
        element.tagName === "DETAILS" &&
        element.classList.contains("content_spoiler")
      ) {
        element.id += `${containerIndex + 1}.${index + 1}`;
      }
    });
  });
});
