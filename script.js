// Variables

const Container = document.getElementById('container')
var Grid = document.getElementById('Grid')
var GridOutput = document.getElementById('GridOutput')

// Show Grid value

Grid.addEventListener('input', function() {
    GridOutput.textContent = this.value
})

// Create square divs

// Criar uma função para a cor selecionada, uma para cor randomica e uma para 'apagar'
// Grid box pode ser interessante para posicionar os 'Squares'

//