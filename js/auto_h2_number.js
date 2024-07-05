document.addEventListener("DOMContentLoaded", function () {
  const containers = document.querySelectorAll(".content");
  containers.forEach((container, containerIndex) => {
    const h2s = container.querySelectorAll("h2");
    h2s.forEach((h2, h2Index) => {
      h2.textContent = `${containerIndex + 1}.${h2Index + 1}. ${
        h2.textContent
      }`;
    });
  });
});
