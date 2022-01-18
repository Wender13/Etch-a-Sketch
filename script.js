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

function setNewColor(newColor) {
    CurrentColor = newColor
}

function setNewGridSize(newSize) {
    CurrentGridSize = Number(newSize)
}

function reloadGrid() {
    clearGrid()
    setGrid(CurrentGridSize)
  }

function clearGrid() {
    Grid.innerHTML = ''
  }

ColorSelected.onchange = (e) => setNewColor(e.target.value)
GridRange.onchange = (e) => setNewGridSize(e.target.value)
ClearButton.onclick = () => reloadGrid()
EraserButton.onclick = () => setNewColor('white')


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

window.onload = () => setGrid(DefaultGridSize)