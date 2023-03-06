const favoriteButtons = document.querySelectorAll(".product-card__favorite");
const favoritesCounter = document.querySelector(".favorites-counter");



favoriteButtons.forEach(item => {
  item.addEventListener("click", () => {
    item.classList.contains('favorite-js') ? favoritesCounter.textContent-- : favoritesCounter.textContent++;
    item.classList.toggle('favorite-js');
    item.classList.contains('favorite-js') ? item.textContent = 'В избранном' : item.textContent = 'В избранное';
  });
});


// SLIDER
let pinStart = document.querySelector('.slider__start-pin');
let pinFinish = document.querySelector('.slider__finish-pin')
let sliderContainer = document.querySelector('.slider-container');
let sliderProcess = document.querySelector('.slider__process');
let widthProcess = () => {
    sliderProcess.style.left = pinStart.offsetLeft + "px";
    sliderProcess.style.width = pinFinish.offsetLeft - pinStart.offsetLeft + "px";
}
widthProcess();
function mouseDown (evt){
    evt.preventDefault();
    let startCords = evt.clientX
    function mouseMove(evtMove) {
        let shift = startCords - evtMove.clientX
        startCords = evtMove.clientX
        let cordX = evt.target.offsetLeft - shift;
        if(evt.target.classList[0] === "slider__start-pin" && cordX < 0){
            cordX = 0;
        } else if (evt.target.classList[0] === "slider__start-pin" && cordX > pinFinish.offsetLeft - 20){
            cordX = pinFinish.offsetLeft - 20;
        }
        if(evt.target.classList[0] === "slider__finish-pin" && cordX > 300 -20){
            cordX = 300 -20;
        } else if (evt.target.classList[0] === "slider__finish-pin" && cordX < pinStart.offsetLeft + 20){
            cordX = pinStart.offsetLeft + 20;
        }
        evt.target.style.left = cordX + 'px';
        widthProcess();

    }
    function mouseUp () {
        sliderContainer.removeEventListener('mousemove', mouseMove);
        document.removeEventListener('mouseup', mouseUp);
    }
    sliderContainer.addEventListener('mousemove', mouseMove);
    document.addEventListener('mouseup', mouseUp);
}
pinStart.addEventListener('mousedown', mouseDown);
pinFinish.addEventListener('mousedown', mouseDown);


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

// STARS
const starContainers = document.querySelectorAll(".product-card__stars");

const elementCreator = (findedElement, starCount) => {
  for (let i = 0; i < starCount; i++) {
    let element = document.createElement("img");
  element.classList.add("product-card__star");
  element.src = "img/star.svg";
  findedElement.appendChild(element);
  };
};

starContainers.forEach(item => {
  elementCreator(item, item.dataset.stars);
});
