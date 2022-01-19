const button = document.getElementById("button");

const changeColor = document.getElementById("change-color2");
const circle = document.getElementById("circle-transition");
const title = document.getElementById("title");
const author = document.getElementById("author");
const darkModeMessage = document.getElementById("dark-mode");
const lightModeMessage = document.getElementById("light-mode");

button.onclick = function () {
  if (changeColor.classList.contains("dark")) {
    changeColor.classList.remove("dark");
    circle.classList.remove("dark");
    title.classList.remove("dark");
    author.classList.remove("dark");
    lightModeMessage.classList.remove("invisible");
    darkModeMessage.classList.add("invisible");
  } else {
    changeColor.classList.add("dark");
    circle.classList.add("dark");
    title.classList.add("dark");
    author.classList.add("dark");
    lightModeMessage.classList.add("invisible");
    darkModeMessage.classList.remove("invisible");
  }
};
