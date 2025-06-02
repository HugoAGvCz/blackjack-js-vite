import { shuffle } from "underscore";

/**
 * Esta función crea un nuevo deck de cartas
 * @param {Array<String>} tiposCarta Ejemplo: ['C', 'D', 'H', 'S'] (corazones, diamantes, tréboles, picas)
 * @param {Array<String>} tiposEspeciales Ejemplo: ['A', 'J', 'Q', 'K'] (as, jota, reina, rey)
 * @returns {Array<String>} regresa un nuevo deck de cartas
 */
export const crearDeck = (tiposCarta, tiposEspeciales) => {

    if ( !tiposCarta || tiposCarta.length === 0) 
        throw new Error('tiposCarta son obligatorios y debe ser un arreglo de strings');
    if ( !tiposEspeciales || tiposEspeciales.length === 0) 
        throw new Error('tiposEspeciales son obligatorios y debe ser un arreglo de strings');


    let deck = [];
    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tiposCarta ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tiposCarta ) {
        for( let esp of tiposEspeciales ) {
            deck.push( esp + tipo);
        }
    }
    // console.log( deck );
    deck = shuffle( deck );
    //console.log( deck );
    return deck;
}

// export default crearDeck;