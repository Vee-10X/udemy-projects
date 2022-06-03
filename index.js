const cancelBurg = document.getElementById("cancel-burger")
const burgerDD = document.querySelector(".harsh-dd")
const harshBurg = document.getElementById("harsh-burger")
const cancelDiv = document.getElementById("cancel-box")

harshBurg.addEventListener("click", () => {
 burgerDD.classList.toggle("d-none")
 cancelDiv.classList.toggle("d-none")
})

cancelBurg.addEventListener("click", () => {
 burgerDD.classList.toggle("d-none")
 cancelDiv.classList.toggle("d-none")
})


let slider = document.getElementById("slider")
let images = [
 "https://www.dropbox.com/s/gws4193ia1tsu8o/download-boy.jpg?dl=1",
 "https://www.dropbox.com/s/i94rjjgxg5elhrw/download-girl.jpg?dl=1"
]
let num = 0

function next() {
 num++;
 if (num >= images.length) {
  num = 0;
 }
 slider.src = images[num]
}

function prev() {
 num--;
 if (num < 0) {
  num = images.length - 1
 }
 slider.src = images[num]
}

document.addEventListener("keydown", e => {
 if (e.key == "ArrowRight") {
  num++;
  if (num >= images.length) {
   num = 0;
  }
  slider.src = images[num]
 }
})

document.addEventListener("keydown", e => {
 if (e.key == "ArrowLeft") {
  num--;
  if (num < 0) {
   num = images.length - 1
  }
  slider.src = images[num]
 }
})