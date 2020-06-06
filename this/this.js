/*
This sólo existe., no se puede declarar como una variable o algo parecido
*/
// El contexto de node.js  this es un objeto vacío
// En el contexto del navegador this es window
console.log('Esto es this =>', this);
this.newProp = 'Agregué una propiedad a this';
console.log('Ahora esto es this:' + this);

// Al crear un objeto encapsulamos cosas, y por ende creamos un nuevo contexto
const playa = {
	palmeras: 50,
	countPalmeras: function () {
		return (
			'en la playa hay ' + this.palmeras + ' palmeras / otra forma de llamar a palmeras es: ' + playa.palmeras
		);
	}
};
console.log("Primer vistazo de playa.CountPalmeras")
console.log(playa.countPalmeras());
console.log("----------------")
// Asignamos playa.countPalmeras a una variable solo para cambiar el contexto de this
const countPalmerasReasigned = playa.countPalmeras;
// Al cambiar su contexto me va a arrojar un undefine en this.palmeras.
console.log("Segundo vistazo de playa.CountPalmeras cambiand contexto")
console.log(countPalmerasReasigned());
console.log("----------------")
// Para arreglar esto, JS Primer tres metodos
/*
bind
call
apply
*/
// Con Bind tienes que pasarle el contexto como parametro
//  se guarda en una variable porque no se puede ejecutar directo
// ya que se crea una nueva función
const countPalmerasConBind = countPalmerasReasigned.bind(playa);
console.log("Tercer vistazo de playa.CountPalmeras bindiando el contexto")
console.log('Con Bind =>', countPalmerasConBind());
console.log("----------------")
// como nota, le puedes pasar otros objetos a bind, cambiar el contexto y obtener otro dato
const playaAcapulco = {
	palmeras: 71
}
const countPalmerasAcapulcoConBind = countPalmerasReasigned.bind(playaAcapulco);
console.log('Acapulco Bind : ', countPalmerasAcapulcoConBind())

console.log("Cuarto vistazo de playa.CountPalmeras con call")
// Call se eecuta en ese mismo momento, no hay necesidad de guardar en variable
// Call recibe como primer parametro el contexto, 
// como segundo parámetro los parametros de mi funcion
console.log('Con Call=>', countPalmerasReasigned.call(playa, null));
// en este ejemplo pasamos null, porque no requerímos parametros

// Apply es igual que call pero como segundo parámetro
// se le pasan los parametros de la función bindeada como array 





return null

