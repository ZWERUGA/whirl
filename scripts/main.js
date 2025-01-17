const accordionBodies = document.querySelectorAll(".details-accordion__body");

accordionBodies.forEach((accordionBody, index) => {
  const accordionButton = accordionBody.querySelector(
    ".details-accordion__button"
  );
  const accordionPanel = accordionBody.querySelector(
    ".details-accordion__panel"
  );

  accordionButton.addEventListener("click", () => {
    const arrow = accordionButton.querySelector(".details-accordion__icon");
    arrow.classList.toggle("details-accordion__icon-active");

    accordionPanel.classList.toggle("details-accordion__panel-active");
  });
});
