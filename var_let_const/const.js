//  var
/*
 NO se puede Re-iniciar
*/

/*
 NO se puede Re-asignar
*/

/*
 Tiene scope de Bloque, tipo if, o loop
*/
const perro = 'Kalimba'
console.log({ global: perro })
try {
    const perro = 'Roots'
    console.log({ insideTry: perro })
} catch (e) {
    console.error(e)
}
/*
 Puede mutar si es un objeto o Arreglo.
*/
const gato = { ojos: 2, pelo: 'suave', color: 'gris' }
gato.ojos = 3
console.log({ gato })