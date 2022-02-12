"use strict";

const textEl = document.querySelector(".heading");
console.log(textEl);
const speedInputEl = document.querySelector(".box__input");
console.log(speedInputEl);

const text = `"Leo Messi" Is The Best Player In The World.`;
let index = 1;
let speed = 300 / speedInputEl.value;

const write = function () {
  textEl.innerHTML =
    text.slice(0, index) + `<span class = "heading__cursor">|</span>`;
  index++;
  if (index > text.length) {
    index = 0;
  }
  setTimeout(write, speed);
};

write();

speedInputEl.addEventListener("input", (e) => {
  speed = 300 / speedInputEl.value;
});
