// Variables

// Default 

const DefaultColor = '#989898'
const DefaultMode = 'color'
const DefaultGridSize = 16

// Changeable

let CurrentColor = DefaultColor
let CurrentMode = DefaultMode
let CurrentGridSize = DefaultGridSize

const Grid = document.getElementById('Grid')
const ColorButton = document.getElementById('ColorButton')
const RandomizeButton = document.getElementById('RandomizeButton')
const EraserButton = document.getElementById('EraserButton')
const ClearButton = document.getElementById('ClearButton')
const ColorSelected = document.getElementById('ColorSelected')
const GridRange = document.getElementById('GridRange')
const GridOutput = document.getElementById('GridOutput')

// Show Grid size

GridRange.addEventListener('input', function() {
    GridOutput.textContent = this.value
})

// Functions

// Random colors

function rainbowMode(mode) {
    if (mode == 'rainbow') {
        window.addEventListener('mousemove', randomize)
    } else {
        window.removeEventListener('mousemove', randomize)
    }
}

function randomize() {
    const r = Math.floor(Math.random() * 256)
    const g = Math.floor(Math.random() * 256)
    const b = Math.floor(Math.random() * 256)
    setNewColor(`rgb(${r}, ${g}, ${b})`)
}

// App mode

function Mode(currentMode) {
    if(currentMode == 'eraser'){
        EraserButton.classList.add('active')
        RandomizeButton.classList.remove('active')
        putColorButton()
        removeColorInput()
        rainbowMode('eraser')
        setNewColor('white')
    } else if(currentMode == 'color'){
        RandomizeButton.classList.remove('active')
        EraserButton.classList.remove('active')
        removeColorButton()
        putColorInput()
        rainbowMode('color')
        setNewColor(ColorSelected.value)
    } else if(currentMode == 'rainbow'){
        RandomizeButton.classList.add('active')
        EraserButton.classList.remove('active')
        putColorButton()
        removeColorInput()
        rainbowMode('rainbow')
    }
}

// Set new color

function setNewColor(newColor) {
    CurrentColor = newColor
}

// Set new grid size

function setNewGridSize(newSize) {
    CurrentGridSize = Number(newSize)
}

// Set new current mode

function setNewMode(newMode) {
    CurrentMode = newMode
    Mode(CurrentMode)
}

function reloadGrid() {
    clearGrid()
    setGrid(CurrentGridSize)
  }

function clearGrid() {
    Grid.innerHTML = ''
  }

// Create grid elements

function setGrid(size) {
    Grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    Grid.style.gridTemplateRows = `repeat(${size}, 1fr)`

    for(let i = 0; i < size * size; i++){
        const GridElement = document.createElement('div')
        GridElement.addEventListener('mouseover', changeColor)
        Grid.appendChild(GridElement)
    }
}

function changeColor(element) {
    element.target.style.backgroundColor = CurrentColor
}

// Remove|Put color button

function removeColorButton() {
    ColorButton.style.display = 'none'
}

function putColorButton() {
    ColorButton.style.display = ''
}

// Remove|Put color input

function removeColorInput() {
    ColorSelected.style.display = 'none'
}

function putColorInput() {
    ColorSelected.style.display = ''
}

// Events

window.onload = () => {
    setGrid(DefaultGridSize)
    removeColorButton()
}
ColorSelected.onchange = (e) => setNewColor(e.target.value)
ColorButton.onclick = () => setNewMode('color')
RandomizeButton.onclick = () => setNewMode('rainbow')
EraserButton.onclick = () => setNewMode('eraser')
ClearButton.onclick = () => reloadGrid()
GridRange.onchange = (e) => setNewGridSize(e.target.value)