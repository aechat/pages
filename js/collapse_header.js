window.addEventListener("DOMContentLoaded", (event) => {
  console.log("DOMContentLoaded event fired");
  const h2Elements = document.querySelectorAll("h2");
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
    console.log(`Replaced h2 element ${index + 1} with spoiler details`);
  });
});


