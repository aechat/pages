// плавный скролл

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      const offset = 80; // смещение от верха
      window.scrollTo({
        top: targetElement.offsetTop - offset,
        behavior: "smooth",
      });
    }
  });
});

// автоматическое расставление пунктов для h2

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
