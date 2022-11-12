import './style.css'

let trigger = false;

const displayShit = () => {
  if(!trigger) {
    app.innerHTML = `
    <h1>Hello BG !</h1>
  `
    trigger = true
  } else {
    app.innerHTML = ``
    trigger = false
  }
}

const app = document.querySelector<HTMLDivElement>('#app')!
const button = document.querySelector<HTMLButtonElement>('#button')!
button.addEventListener('click', displayShit)

