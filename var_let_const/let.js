//  let
/*
 NO se puede Re-iniciar en el mismo scope
*/

let house = true;
    /*
 Tiene scope de Bloque, en ifs, loops, etc.
*/
try {
    let house = false;
    // Si house no estuviera declarada dentro de try,
    // tomaría el valor de house fuera del scope de try
    console.log({ insideTry: house })
} catch (e) {
    console.error(e)
    house = null
}
console.log({ house })
/*
 Se puede Re-asignar
*/
house = false;
console.log({ reasign: house })