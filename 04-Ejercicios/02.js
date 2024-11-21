/**
 * Nombre: ancho * alto
 * 8K 7680 * 4320
 * 4K 3840 * 2160
 * WQHD 2560 * 1440
 * FDH 1920 * 1080
 * HD 1280 * 720
 */

function nombreResolucion (ancho, alto){
    if (ancho > 7680 &&  alto > 4320){
        return '8K';
    } else if (ancho > 3840 &&  alto > 2160){
        return '4K';
    }   else if (ancho > 2560 &&  alto > 1440){
        return 'WQHD';
    }   else if (ancho > 1920 &&  alto > 1080){
        return 'FDH';
    }   else if (ancho > 1280 &&  alto > 720){
        return 'HD';
    }
        
}

let nombre = nombreResolucion(1366, 768);
console.log(nombre);