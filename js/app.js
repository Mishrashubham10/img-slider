const next = document.querySelector(".next");
const previous = document.querySelector(".prev");
const imageContainer = document.querySelector(".image-container");
const imgs = document.querySelectorAll("img");

let currentImg = 1;
let timeout;

next.addEventListener("click", () => {
  currentImg++;
  clearTimeout(timeout);
  updateImg();
});

previous.addEventListener("click", () => {
    currentImg--;
    clearTimeout(timeout);
    updateImg();
});

updateImg();

function updateImg() {
    if (currentImg > imgs.length) {
        currentImg = 1;
    } else if (currentImg < 1) {
        currentImg = imgs.length;
    };
  imageContainer.style.transform = `translateX(-${(currentImg -1) * 500}px)`;
  timeout = setTimeout(() => {
    currentImg++;
    updateImg();
  }, 3000);
}
