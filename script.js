const favoriteButtons = document.querySelectorAll(".product-card__favorite");
const favoritesCounter = document.querySelector(".favorites-counter");



favoriteButtons.forEach(item => {
  item.addEventListener("click", () => {
    item.classList.contains('favorite-js') ? favoritesCounter.textContent-- : favoritesCounter.textContent++;
    item.classList.toggle('favorite-js');
    item.classList.contains('favorite-js') ? item.textContent = 'В избранном' : item.textContent = 'В избранное';
  });
});

// MODAL WINDOW
const modalOpenButton = document.querySelectorAll(".modal-open-js");
const modal = document.querySelector(".modal-container");
const modalCloseButton = document.querySelector(".modal__btn");

const modalOpen = () => {
  modal.style.display= "flex";
  modalCloseButton.addEventListener("click", modalClose);
}

const modalClose = () => {
  modal.style.display= "none";
  modalCloseButton.removeEventListener("click", modalClose);
}

modalOpenButton.forEach((item) => {
  item.addEventListener("click", modalOpen);
});

// TOOLTIP

const tooltipButton = document.querySelector(".tooltip__btn");
const tooltipText = document.querySelector(".tooltip__text");

const tooltipShow = () => {
  tooltipText.style.display = "block";
  setTimeout(() => {tooltipText.style.display = "none"}, "3000");
}

tooltipButton.addEventListener("click", tooltipShow);
