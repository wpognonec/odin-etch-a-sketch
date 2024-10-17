let clearButton = document.querySelector(".clearGrid");
let sizeDiv = document.querySelector(".sizeDiv");
let input = document.querySelector("input#size");
let color = document.querySelector("input#color");
let randomColor = document.querySelector("#randomColor");
let fade = document.querySelector("#fade");
let gridSize = 16

clearButton.addEventListener("click", () => {
  document.querySelector(".wrapper").remove()
  createGrid(gridSize)
})

input.addEventListener("input", (e) => {
  gridSize = parseInt(e.target.value)
  sizeDiv.textContent = `Size: ${e.target.value}`
})

input.addEventListener("mouseup", () => {
  document.querySelector(".wrapper").remove()
  createGrid(gridSize)
})

function getRandomColor() {
  let r = Math.floor(Math.random() * 256)
  let g = Math.floor(Math.random() * 256)
  let b = Math.floor(Math.random() * 256)
  return `rgb(${r},${g},${b})`
}

function createGrid(size) {
  const outer = document.querySelector(".outer")
  const wrapper = document.createElement("div");
  wrapper.className = "wrapper"
  wrapper.setAttribute("oncontextmenu", "return false;")
  for (let i = 1; i <= size*size; i++) {
    const div = document.createElement("div");
    div.setAttribute("id", i)
    div.className = "box"
    div.style.width = `${960/size}px`
    div.style.height = `${960/size}px`
    wrapper.appendChild(div)
  }

  ["mousedown", "mouseover"].forEach(evt => {
    wrapper.addEventListener(evt, (e) => {
      if (e.buttons === 1) {
        if (e.target.className !== "wrapper") {
          if (randomColor.checked) e.target.style.backgroundColor = getRandomColor()
          else e.target.style.backgroundColor = color.value
          if (fade.checked) e.target.style.opacity = e.target.style.opacity ? parseFloat(e.target.style.opacity) + 0.1 : 0.1
          else e.target.style.opacity = 1
          
        }
      }
      if (e.buttons === 2) {
        if (e.target.className !== "wrapper") {
          e.target.style.backgroundColor = "white"
          e.target.style.opacity = null
        }
      }
    })
  })

  outer.appendChild(wrapper)
}

createGrid(gridSize)