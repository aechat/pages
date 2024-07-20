document.addEventListener("DOMContentLoaded", function () {
  const containers = document.querySelectorAll(".content");
  containers.forEach((container, containerIndex) => {
    const h2s = container.querySelectorAll("summary");
    [...h2s].forEach((element, index) => {
      if (element.tagName === "SUMMARY" && !element.parentElement.closest("details > summary")) {
        element.id = `${containerIndex + 1}.${index + 1}`;
      }
      element.textContent = `${containerIndex + 1}.${index + 1}. ${element.textContent}`;
    });
  });
});

