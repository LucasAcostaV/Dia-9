let jugadorActual = 'X'; // Jugador actual (inicia con 'X')
let tablero = ['', '', '', '', '', '', '', '', '']; // Tablero del juego (inicialmente vacío)

function posicionDelTablero(index) {
    if (!tablero[index]) { // Verifica si la celda está vacía
        tablero[index] = jugadorActual; // Coloca el marcador del jugador actual en la celda
        document.getElementById('resultado').innerText = elegirGanador(); // Actualiza el resultado del juego
        document.getElementById('tablero').children[index].innerText = jugadorActual; // Actualiza visualmente la celda con el marcador del jugador
        jugadorActual = jugadorActual === 'X' ? 'O' : 'X'; // Cambia al siguiente jugador
    }
}

function elegirGanador() {
    // Condiciones de victoria
    const condicionDeVictoria = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    // Verifica si hay un ganador
    for (let condicion of condicionDeVictoria) {
        const [a, b, c] = condicion;
        if (tablero[a] && tablero[a] === tablero[b] && tablero[a] === tablero[c]) {
            return `${tablero[a]} gano!`; // Retorna el jugador ganador
        }
    }

    // Verifica si hay un empate
    if (tablero.every(celda => celda !== '')) {
        return 'Es un empate!'; // Retorna empate
    }

    return ''; // Si no hay ganador ni empate, retorna cadena vacía
}

function volverAJugar() {
    jugadorActual = 'X'; // Reinicia al jugador actual
    tablero = ['', '', '', '', '', '', '', '', '']; // Reinicia el tablero
    document.getElementById('resultado').innerText = ''; // Borra el resultado del juego
    Array.from(document.getElementById('tablero').children).forEach(celda => celda.innerText = ''); // Borra visualmente los marcadores del tablero
}
