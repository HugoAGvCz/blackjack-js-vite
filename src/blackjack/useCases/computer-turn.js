import { crearCartaHTML, pedirCarta, valorCarta } from "./"; 

/**
 * 
 * @param {Number} puntosMinimos puntos mínimos que la computadora necesita para ganar 
 * @param {HTMLElement[]} puntosHTML elementos HTML donde se mostrarán los puntos de la computadora
 * @param {HTMLElement} divCartasComputadora elemento HTML donde se mostrarán las cartas de la computadora
 * @param {Array<String>} deck 
 */
export const turnoComputadora = ( puntosMinimos, puntosHTML, divCartasComputadora, deck = []) => {

    if ( !puntosMinimos ) throw new Error('Puntos mínimos son necesarios'); 
    if ( !puntosHTML ) throw new Error('Argumento puntosHTML es necesario');

    let puntosComputadora = 0;

    do {
        const carta = pedirCarta(deck);

        puntosComputadora = puntosComputadora + valorCarta( carta );
        puntosHTML[1].innerText = puntosComputadora;
        
        const imgCarta = crearCartaHTML( carta );
        divCartasComputadora.append( imgCarta );

        if( puntosMinimos > 21 ) {
            break;
        }

    } while(  (puntosComputadora < puntosMinimos)  && (puntosMinimos <= 21 ) );

    setTimeout(() => {
        if( puntosComputadora === puntosMinimos ) {
            alert('Nadie gana :(');
        } else if ( puntosMinimos > 21 ) {
            alert('Computadora gana')
        } else if( puntosComputadora > 21 ) {
            alert('Jugador Gana');
        } else {
            alert('Computadora Gana')
        }
    }, 100 );
}