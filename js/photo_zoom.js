document.addEventListener("DOMContentLoaded", function () {
  const images = document.querySelectorAll("img");

  images.forEach((image) => {
    image.addEventListener("click", function () {
      if (this.style.transform === "scale(1.5)") {
        this.style.transform = "scale(1)";
        this.style.filter = "drop-shadow(0px 0px 0px transparent)";
      } else {
        this.style.transform = "scale(1.5)";
        this.style.filter = "drop-shadow(0px 0px 20px var(--for-shadow))";
      }
    });
  });
});
