"use strict";
/////1/////
let total = 0;

document.querySelectorAll(".button").forEach((item) => {
  item.addEventListener("click", () => {
    let amount = parseInt(item.getAttribute("data-amount"));
    total += amount;
    let totalParagraph = document.querySelector(".total");
    totalParagraph.innerText = `Total $${total}.00`;
  });
});

/////2/////
let makeMoneyButton = document.querySelector(".make-money");
makeMoneyButton.addEventListener("submit", () => {
  event.preventDefault();
  let data = new FormData(makeMoneyButton);
  let howMany = data.get("number");
  let whichCoin = data.get("");
});

/////3/////
let bulb = document.querySelector(".bulb");
let bulbOn = document.querySelector(".bulb-on");
let bulbOff = document.querySelector(".bulb-off");
let bulbToggle = document.querySelector(".bulb-toggle");
let bulbEnd = document.querySelector(".bulb-end");

//light bulb on
bulbOn.addEventListener("click", () => {
  bulb.classList.add("on");
  bulb.classList.remove("off");
});

//light bulb off
bulbOff.addEventListener("click", () => {
  bulb.classList.add("off");
  bulb.classList.remove("on");
});

//light bulb toggle
const toggle = () => {
  if (bulb.classList.contains("on")) {
    bulb.classList.add("off");
    bulb.classList.remove("on");
  } else {
    bulb.classList.add("on");
    bulb.classList.remove("off");
  }
};
bulbToggle.addEventListener("click", toggle);

//light bulb END
bulbEnd.addEventListener("click", () => {
  document.querySelectorAll(".bulb-button").forEach((item) => {
    item.disabled = true;
  });
  bulb.remove();
});
