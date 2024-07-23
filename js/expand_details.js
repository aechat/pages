const detailsElements = document.querySelectorAll("details");

function expandAllDetails() {
    detailsElements.forEach((details) => {
        details.open = true;
    });
}