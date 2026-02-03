"use strict";

const navList = document.querySelector(".box-nav-link");
const btnAllNavLinks = document.querySelectorAll(".nav-link");
const frontEnd = document.querySelector(".dev-role");
const definitionBox = document.querySelector(".box-frontend-definition");
const techStackList = document.querySelector(".list-tech-stack");
const allSections = document.querySelectorAll(".section");
navList.addEventListener("click", function (event) {
  if (event.target.classList.contains("nav-link")) {
    const btnTools = document.querySelector(".tools");
    const btnConnect = document.querySelector(".connect");
    const btnAbout = document.querySelector(".about");
    btnAllNavLinks.forEach((link) => link.classList.remove("nav-link-active"));
    allSections.forEach((section) =>
      section.classList.remove("section-active"),
    );
    event.target.classList.add("nav-link-active");
    if (event.target === btnTools) {
      const sectionTools = document.querySelector(".section-tools");
      setTimeout(() => {
        sectionTools.classList.add("section-active");
      }, 1000);
      event.target.classList.remove("nav-animate");
      btnConnect.classList.add("nav-animate");
    } else if (event.target === btnConnect) {
      const sectionConnect = document.querySelector(".section-connect");
      setTimeout(() => {
        sectionConnect.classList.add("section-active");
      }, 1000);
      event.target.classList.remove("nav-animate");
      btnTools.classList.add("nav-animate");
    } else if (event.target === btnAbout) {
      const sectionAbout = document.querySelector(".section-about");
      setTimeout(() => {
        sectionAbout.classList.add("section-active");
      }, 1000);
      event.target.classList.remove("nav-animate");
      btnTools.classList.add("nav-animate");
      btnConnect.classList.remove("nav-animate");
    }
  }
});

frontEnd.addEventListener("mouseover", function () {
  definitionBox.classList.add("box-definition-active");
});
frontEnd.addEventListener("mouseout", function () {
  definitionBox.classList.remove("box-definition-active");
});

techStackList.addEventListener("mouseover", function (event) {
  const box = event.target.getAttribute("data-box");
  if (!box) return;
  document.querySelector(`.${box}`).classList.add("box-definition-active");
});

techStackList.addEventListener("mouseout", function (event) {
  const box = event.target.getAttribute("data-box");
  if (!box) return;
  document.querySelector(`.${box}`).classList.remove("box-definition-active");
});
