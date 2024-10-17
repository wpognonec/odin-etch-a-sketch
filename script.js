let clearButton = document.querySelector(".clearGrid");
let sizeDiv = document.querySelector(".sizeDiv");
let input = document.querySelector("input#size");
let color = document.querySelector("input#color")

clearButton.addEventListener("click", () => {
  document.querySelector(".wrapper").remove()
  createGrid(parseInt(sizeDiv.textContent))
})

input.addEventListener("input", (e) => {
  sizeDiv.textContent = e.target.value
})

input.addEventListener("mouseup", () => {
  document.querySelector(".wrapper").remove()
  createGrid(parseInt(sizeDiv.textContent))
})

function createGrid(size) {
  const body = document.querySelector("body")
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
          e.target.style.backgroundColor = color.value
        }
      }
      if (e.buttons === 2) {
        if (e.target.className !== "wrapper") {
          e.target.style.backgroundColor = "white"
        }
      }
    })
  })

  body.appendChild(wrapper)
}

createGrid(parseInt(sizeDiv.textContent))