const changeColor = document.getElementById('change-color')
const button = document.getElementById('button')
const circle = document.getElementById('circle-transition')
const title = document.getElementById('title')
const modeSelectMsg = document.querySelector('.mode-select')
const author = document.getElementById('author')

button.onclick = function () {
  if (changeColor.classList.contains('dark')) {
    changeColor.classList.remove('dark')
    circle.classList.remove('dark')
    title.classList.remove('dark')
    author.classList.remove('dark')

    modeSelectMsg.textContent = 'Light Mode'
  } else {
    changeColor.classList.add('dark')
    circle.classList.add('dark')
    title.classList.add('dark')
    author.classList.add('dark')

    modeSelectMsg.textContent = 'Dark Mode'
  }
}
