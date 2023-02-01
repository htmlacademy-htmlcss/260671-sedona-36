const favoriteButtons = document.querySelectorAll(".product-card__favorite");
const favoritesCounter = document.querySelector(".favorites-counter");



favoriteButtons.forEach(item => {
  item.addEventListener("click", () => {
    item.classList.contains('favorite-js') ? favoritesCounter.textContent-- : favoritesCounter.textContent++;
    item.classList.toggle('favorite-js');
    item.classList.contains('favorite-js') ? item.textContent = 'В избранном' : item.textContent = 'В избранное';
  });
});
