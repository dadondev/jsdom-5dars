let allCards = document.querySelectorAll(".card");

allCards.forEach((card) => {
  allCards.forEach((crad1) => {
    crad1.addEventListener("click", () => {
      if (card == crad1) {
        card.nextElementSibling.classList.add("max-h-[400px]");
      } else {
        card.nextElementSibling.classList.remove("max-h-[400px]");
      }
    });
  });
});
