window.addEventListener("DOMContentLoaded", (event) => {
  console.log("DOMContentLoaded event fired");
  const contentAreas = document.querySelectorAll(".content");
  contentAreas.forEach((content) => {
    const h2Elements = content.querySelectorAll("h2");
    console.log(`Found ${h2Elements.length} h2 elements`);
    h2Elements.forEach((h2, index) => {
      console.log(`Processing h2 element ${index + 1}`);
      const nextH2 = h2Elements[index + 1];
      const contentToSpread = [];
      let currentElement = h2.nextElementSibling;
      while (currentElement && currentElement !== nextH2) {
        if (currentElement.tagName === "H2") {
          break;
        }
        contentToSpread.push(currentElement);
        currentElement = currentElement.nextElementSibling;
      }
      const spoiler = document.createElement("details");
      spoiler.classList.add("content_spoiler");
      const summary = document.createElement("summary");
      summary.textContent = h2.textContent;
      spoiler.appendChild(summary);
      spoiler.append(...contentToSpread);
      h2.parentNode.replaceChild(spoiler, h2);
      console.log(`h2 заменён ${index + 1} спойлером`);
    });
  });
});

function undoSpoilers() {
  const contentAreas = document.querySelectorAll(".content");
  contentAreas.forEach((content) => {
    const spoilers = content.querySelectorAll("details.content_spoiler");
    const deleteSpoilers = (spoiler) => {
      const parent = spoiler.parentNode;
      parent.removeChild(spoiler);
    };
    let lastNode = content.firstChild;
    spoilers.forEach((spoiler) => {
      const summary = spoiler.querySelector("summary");
      const h2 = document.createElement("h2");
      h2.textContent = summary.textContent;
      lastNode = content.insertBefore(h2, lastNode.nextSibling);
      const contentToAppend = [...spoiler.querySelectorAll(":scope > summary ~ *")];
      contentToAppend.forEach((node) => {
        lastNode = content.insertBefore(node, lastNode.nextSibling);
      });
      deleteSpoilers(spoiler);
    });
  });
}
