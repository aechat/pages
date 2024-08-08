document.addEventListener("DOMContentLoaded", function () {
  const images = document.querySelectorAll("img");

  images.forEach((image) => {
    image.addEventListener("click", function () {
      if (this.style.transform.includes("scale(1.5)")) {
        this.style.transform = "scale(1)";
        this.style.filter = "drop-shadow(0px 0px 0px transparent)";
        this.style.cursor = "zoom-in";
      } else {
        this.style.transform = "scale(1.5)";
        this.style.filter = "drop-shadow(0px 0px 20px var(--shadow))";
        this.style.cursor = "zoom-out";
      }
    });
  });
});
