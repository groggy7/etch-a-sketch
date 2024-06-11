const button = document.createElement("button")
button.innerText = "Set grid size"
button.style.display = "block"
button.style.margin = "10px auto"

document.body.insertBefore(button, document.body.firstChild)

const container = document.querySelector(".container")
container.style.display = "flex"
container.style.justifyContent = "center"
container.style.alignItems = "center"
container.style.flexWrap = "wrap"
container.style.width = "800px"
container.style.height = "800px"
container.style.margin = "auto"

button.addEventListener("click", () => {
    const dimensionString = prompt("set grid size")
    const dimension = parseInt(dimensionString)

    if(!Number.isInteger(dimension) || dimension < 1 || dimension > 100) {
        console.error("you must specify a number beteen 1-100!");
        return;
    }

    DrawGrids(dimension)
})

function CreateRandomColor() {
    const letters = '0123456789ABCDEF'

    const colorCode = `#`
    for(let i = 0; i < 6; i++) {
        const randChar = letters[Math.round(Math.random() * 16)]
        colorCode += randChar
    }

    return colorCode
}

function CreateBox(boxSize) {
    const box = document.createElement("div")
        
    box.style.backgroundColor = "white"
    box.style.border = "0.1px solid black"
    box.style.width = `${boxSize}px`
    box.style.height = `${boxSize}px`
    box.style.boxSizing = "border-box"

    box.addEventListener("mouseenter", () => {
        box.style.backgroundColor = CreateRandomColor()
    })

    return box
}

function DrawGrids(dimension) {
    container.innerHTML = ""
    const boxSize = 800 / dimension

    for(let i = 0; i < dimension*dimension; i++) {
        const box = CreateBox(boxSize)
        container.appendChild(box)
    }
}