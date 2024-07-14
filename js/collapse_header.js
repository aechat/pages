// document.addEventListener("DOMContentLoaded", () => {
//   wrapContent();
//   const undoButton = document.querySelector("[data-action='undo-spoilers']");
//   if (undoButton) {
//     undoButton.addEventListener("click", undoSpoilers);
//   }
// });

// function wrapContent() {
//   const contentAreas = document.querySelectorAll(".content");
//   contentAreas.forEach((container) => {
//     const h2Elements = Array.from(container.querySelectorAll("h2"));
//     h2Elements.forEach((h2, index) => {
//       const nextH2 = h2Elements[index + 1];
//       const contentToSpread = [];
//       let currentElement = h2.nextElementSibling;
//       while (currentElement && currentElement !== nextH2) {
//         contentToSpread.push(currentElement);
//         currentElement = currentElement.nextElementSibling;
//       }
//       const details = document.createElement("details");
//       details.classList.add("content_spoiler");
//       const summary = document.createElement("summary");
//       summary.textContent = h2.textContent;
//       details.appendChild(summary);
//       details.append(...contentToSpread);
//       h2.parentNode.insertBefore(details, h2);
//     });
//     container.dataset.spoiled = "true";
//   });
// }

// function undoSpoilers() {
//   const contentAreas = document.querySelectorAll(".content");
//   contentAreas.forEach((content) => {
//     const spoilers = content.querySelectorAll("details.content_spoiler");
//     spoilers.forEach((spoiler) => {
//       const summary = spoiler.querySelector("summary");
//       const h2 = document.createElement("h2");
//       h2.textContent = summary.textContent;
//       content.insertBefore(h2, spoiler);
//       const contentToAppend = Array.from(spoiler.querySelectorAll(":scope > summary ~ *"));
//       contentToAppend.forEach((node) => {
//         content.insertBefore(node, spoiler);
//       });
//       content.removeChild(spoiler);
//     });
//   });
//   this.classList.remove("selected");
// }


