
const readMoreButton = document.getElementById("read-more-button");
const aboutDetails = document.getElementById("about-details");

readMoreButton.addEventListener("click", function () {
  // Baliktarin ang hidden: true = nakatago, false = nakikita.
  aboutDetails.hidden = !aboutDetails.hidden;

  if (aboutDetails.hidden) {
    readMoreButton.textContent = "Read More";
  } else {
    readMoreButton.textContent = "Read Less";
  }

  // Ipaalam sa screen readers kung nakabukas ang dagdag na impormasyon.
  readMoreButton.setAttribute("aria-expanded", String(!aboutDetails.hidden));
});
