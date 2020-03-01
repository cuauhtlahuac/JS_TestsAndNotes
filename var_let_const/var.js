//  var
/*
 Se puede Re-iniciar
*/
var perro = 'Goofy'
var perro = 'Maxy'
console.log({re_estarted: perro})
/*
 Se puede Re-asignar
*/

/*
 Tiene Scope de Función, incluyendo la funcion global       
*/

/*
 Tiene scope de Bloque, tipo if, o loop
*/
try { perro = 'Roots' } catch (e) { console.log(e) }
console.log({ blockLess: perro })