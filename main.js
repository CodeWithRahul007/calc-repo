// IIFE

(function () {

  // Targetting the screen has class screen

  let screen = document.querySelector(".screen");
  let buttons = document.querySelectorAll(".btn");
  let clear = document.querySelector(".btn-clear");
  let equal = document.querySelector(".btn-equal");

  console.log(buttons);

  // First Functionality
  buttons.forEach(function (button) {
    button.addEventListener('click', function (e) {
      let userInput = e.target.dataset.num;
      screen.value += userInput;
    })
  })
})()