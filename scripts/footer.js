const lastModifiedDateComponent = document.querySelector("#last-modified");

const lastModifiedDate = new Date(document.lastModified);

let formattedLastModifiedDate = lastModifiedDate.toLocaleDateString("en-US", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit"
});

lastModifiedDateComponent.textContent = formattedLastModifiedDate;

const actualYearComponent = document.querySelector("#year");
const currentYear = new Date().getFullYear();
actualYearComponent.textContent = currentYear;