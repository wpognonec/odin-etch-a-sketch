let gridSize = 16
let changeButton = document.querySelector(".changeGrid");
let clearButton = document.querySelector(".clearGrid");

changeButton.addEventListener("click", () => {
  document.querySelector(".wrapper").remove()
  gridSize = parseInt(prompt("Please enter a grid size: "))
  createGrid(gridSize)
})

clearButton.addEventListener("click", () => {
  document.querySelector(".wrapper").remove()
  createGrid(gridSize)
})


function createGrid(size) {
  const body = document.querySelector("body")
  const wrapper = document.createElement("div");
  wrapper.className = "wrapper"
  for (let i = 1; i <= size*size; i++) {
    const div = document.createElement("div");
    div.setAttribute("id", i)
    div.className = "box"
    div.style.width = `${960/size}px`
    div.style.height = `${960/size}px`
    div.addEventListener("mouseenter", (e) => {
      if (e.buttons === 1) div.style.background = "slategray"
    })
    wrapper.appendChild(div)
  }
  body.appendChild(wrapper)
}

createGrid(16)