/* Slider */

var containerOne = document.querySelector(".container-about");
var containerTwo = document.querySelector(".container-abouttwo");
var arrowLeft = document.querySelector(".link-arrow-left");
var arrowRight = document.querySelector(".link-arrow-right");

arrowRight.addEventListener("click", function (evt) {
   evt.preventDefault();
   containerOne.classList.add("none");
   containerTwo.classList.remove("none");
});

arrowLeft.addEventListener("click", function (evt) {
   evt.preventDefault();
   containerOne.classList.remove("none");
   containerTwo.classList.add("none");
});

/* Popup */

var link = document.querySelector(".nav-link-popup");
var popup = document.querySelector(".popup");
var close = document.querySelector(".close-link");

link.addEventListener("click", function (evt) {
   evt.preventDefault();
   popup.classList.remove("popup-open");
});

close.addEventListener("click", function (evt) {
   evt.preventDefault();
   popup.classList.add("popup-open");
});

window.addEventListener('keydown', function (evt) {
   if (evt.keyCode === 27){
      if (popup.classList.contains("popup")) {
         evt.preventDefault();
         popup.classList.add("popup-open");
      }
   }
});