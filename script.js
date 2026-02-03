"use strict";

const navList = document.querySelector(".box-nav-link");
const btnAllNavLinks = document.querySelectorAll(".nav-link");
const frontEnd = document.querySelector(".dev-role");
const definitionBox = document.querySelector(".box-frontend-definition");
navList.addEventListener("click", function (event) {
  if (event.target.classList.contains("nav-link")) {
    const btnTools = document.querySelector(".tools");
    const btnConnect = document.querySelector(".connect");
    btnAllNavLinks.forEach((link) => link.classList.remove("nav-link-active"));
    event.target.classList.add("nav-link-active");
    if (event.target === btnTools) {
      event.target.classList.remove("nav-animate");
      btnConnect.classList.add("nav-animate");
    } else if (event.target === btnConnect) {
      event.target.classList.remove("nav-animate");
      btnTools.classList.add("nav-animate");
    }
  }
});

frontEnd.addEventListener("mouseover", function () {
  definitionBox.classList.add("box-definition-active");
});
frontEnd.addEventListener("mouseout", function () {
  definitionBox.classList.remove("box-definition-active");
});
