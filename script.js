
let button = document.querySelector("button");
button.addEventListener("click", () => {
  document.querySelector(".wrapper").remove()
  const gridSize = parseInt(prompt("Please enter a grid size: "))
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
    
    div.addEventListener("mouseenter", () => {
      div.style.background = "slategray"
    })
  
    div.addEventListener("mouseleave", () => {
      div.style.background = ""
    })
    wrapper.appendChild(div)
  }
  body.appendChild(wrapper)
}

createGrid(16)