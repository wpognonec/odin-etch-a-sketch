
let button = document.querySelector("button");
// button.addEventListener("click")

for (let i = 1; i <= 256; i++) {
  const div = document.createElement("div");
  div.setAttribute("id", i)
  div.className = "box"
  div.style.width = `${960/16}px`
  div.style.height = `${960/16}px`

  // div.textContent = i
  

  div.addEventListener("mouseenter", () => {
    div.style.background = "slategray"
  })

  div.addEventListener("mouseleave", () => {
    div.style.background = ""
  })
  document.querySelector(".wrapper").appendChild(div)
}