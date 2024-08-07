// Ejercicio 1: Números Impares
function numerosImpares() {
    let resultado = "Números impares del 1 al 50: ";
    for (let i = 1; i <= 50; i++) {
        if (i % 2 !== 0) {
            resultado += i + " ";
        }
    }
    mostrarResultado(resultado);
}

// Ejercicio 2: Pokémons Multiplos de 5
function pokemonsMultiplosDeCinco() {
    const pokemons = [
        { numero: 1, nombre: "Bulbasaur" },
        { numero: 2, nombre: "Ivysaur" },
        { numero: 3, nombre: "Venusaur" },
        { numero: 4, nombre: "Charmander" },
        { numero: 5, nombre: "Charmeleon" },
        { numero: 6, nombre: "Charizard" },
        { numero: 7, nombre: "Squirtle" },
        { numero: 8, nombre: "Wartortle" },
        { numero: 9, nombre: "Blastoise" },
        { numero: 10, nombre: "Caterpie" },
        // Añadir más Pokémons según sea necesario
    ];

    let numero = parseInt(prompt("Introduce un número:"));
    let resultado = "Pokémons con números múltiplos de 5 hasta " + numero + ": ";
    for (let i = 0; i < pokemons.length; i++) {
        if (pokemons[i].numero % 5 === 0 && pokemons[i].numero <= numero) {
            resultado += pokemons[i].nombre + " ";
        }
    }
    mostrarResultado(resultado);
}

// Ejercicio 3: Elementos Numéricos
function elementosNumericos() {
    let array = [4, "dos", 8, "tres", 5, 9, 1, "cero"];
    let resultado = "Elementos numéricos del array: ";
    for (let i = 0; i < array.length; i++) {
        if (typeof array[i] === 'number') {
            resultado += array[i] + " ";
        }
    }
    mostrarResultado(resultado);
}

function mostrarResultado(mensaje) {
    document.getElementById('output').textContent = mensaje;
}