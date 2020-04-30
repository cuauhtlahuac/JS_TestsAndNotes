/*
This es el objeto de javascript en el cual se está ejecutando el código actual
This sólo existe., no se puede declarar como una variable o algo parecido
*/
// This se inicializa en este contexto como un objeto vacío
console.log('Esto es this =>', this);
this.newProp = 'Una nueva prop para this';
console.log(this);

// Aquí encapsulamos cosas, y por nde creamos un nuevo contexto
const playa = {
	palmeras: 50,
	countPalmeras: function() {
		return (
			'en la playa hay ' + this.palmeras + ' palmeras + ' + playa.palmeras + ' otra forma de llamar a palmeras'
		);
	}
};
console.log({ playa });
console.log(playa.countPalmeras());
const countPalmeras = playa.countPalmeras;
console.log({ countPalmeras });
// Este me va a arrojar un undefine en this.palmeras, porque el contexto del objeto cambió
console.log(countPalmeras());
// Para arreglar esto, JS tiene tres metodos
/*
bind
call
apply
*/
// Con Bind tienes que pasarle el contexto como parametro
// se guarda en una variable para poder ejecutar
const countBindeado = countPalmeras.bind(playa);
console.log('Con Bind =>', countBindeado());
// Con metodo Call evitamos guardar la funcion en una variable para despues ejecutarla
// Funciona pasandole como primer parametro el contexto y como segundo los parametros de la funcion
// En este caso funciona nuevamente porque no tenemos parametros que pasarle
console.log('Con Call=>', countPalmeras.call(playa, null));
