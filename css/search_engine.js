document
  .getElementById("searchForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    var query = document.getElementById("searchQuery").value;
    var selectedEngine = document.querySelector(
      'input[name="engine"]:checked'
    ).value;
    var searchUrl;
    if (selectedEngine === "yandex") {
      searchUrl = "https://yandex.ru/search/?text=" + encodeURIComponent(query);
    } else if (selectedEngine === "google") {
      searchUrl =
        "https://www.google.com/search?q=" + encodeURIComponent(query);
    }
    window.location.href = searchUrl;
  });
