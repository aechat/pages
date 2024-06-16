document.addEventListener("DOMContentLoaded", function () {
  const images = document.querySelectorAll("img");

  images.forEach((image) => {
    image.addEventListener("click", function () {
      if (this.style.transform === "scale(1.5)") {
        this.style.transform = "scale(1)";
        this.style.filter = "drop-shadow(30px 10px 4px transparent)";
      } else {
        this.style.transform = "scale(1.5)";
        this.style.zIndex = "1000";
        this.style.filter = "drop-shadow(0px 0px 40px #00000020)";
      }
    });
  });
});
