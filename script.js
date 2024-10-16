let clearButton = document.querySelector(".clearGrid");
let sizeDiv = document.querySelector(".sizeDiv");
let input = document.querySelector("input");

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

createGrid(parseInt(sizeDiv.textContent))