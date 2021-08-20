// I created this selector
$pkm = document.querySelector('#pkm')

const playa = {
    palmeras: 50,
    countPalmeras: function () {
        return (
            'en la playa hay ' + this.palmeras + ' palmeras / otra forma de llamar a palmeras es: ' + playa.palmeras
        );
    },
};


class API {
    Base_URL = 'https://pokeapi.co/api/v2/'
    async fetch(id) {
        const searchId = id ? id : this.id ? this.id : 100
        const response = await fetch(`${this.Base_URL}pokemon/${searchId}`)
        const pokemon = await response.json()
        // linea abajo se creo para pasar el dato de pokemon a los objetos creados
        // así podemos llamar el dato por ejemplo usando this.pokemon.etc...dentro de la clase
        this.pokemon = pokemon
        return pokemon
    }
}

// Se pueden usar los dos metodos para traer el nombre de los pokemons
const api = new API

// seleccionamos el id con pkm que vamos a pintar
api.fetch(25).then(function (data) {
    console.log(data.name)
    $pkm.textContent = data.name
})

class Playa extends API {
    constructor({ playa = "acapulco", id = 1 }) {
        super()
        this.playa = playa
        this.id = id
    }
    palmeras = 63
    $pkm2 = document.querySelector('#pkm2')
    renderName() {
        this.$pkm2.textContent = `Pokemon encontrado ${name}, ${this.pokemon.name}`
    }
    changePlayaName(newName) {
        this.playa = newName
    }
    countPalmeras = function () {
        return (
            'En la playa ' + this.playa + ' hay ' + this.palmeras + ' palmeras'
        );
    }
    playasName() {
        return 'El nombre de la playa es ' + this.playa
    }
}

// Creamos una instancia de Playa con el id de Pockemon
const pieDeLaCuesta = new Playa({id: 45})
// vemos el nombre de playa pie de la cuesta que por ser undeined el output es acapulco
console.log(pieDeLaCuesta.playasName())
// actualizamos el nombre
pieDeLaCuesta.changePlayaName("Pie de la Cuesta")
// Al imprimirlo vemos que su nmbre es pie de la Cuesta
console.log(pieDeLaCuesta.playasName())
// ejecuté count palmeras solo para verificar que funciona
console.log(pieDeLaCuesta.countPalmeras())

// Creo otra instancia de playa 
const playaNiñoRata = new Playa("Playa Niños Rata")
console.log(playaNiñoRata.playasName({playa: "Truena pedorros"}))

playaNiñoRata.fetch(80).then(function (data) {   
    // esta línea fue una curiosidad, agregué al contexto de this el nombre
    // así cuando se renderiza el metodo renderName puede acceder a name,
    // al imprimir this, resulta que lo estoy guardando en el contexto global de this
    this.name = data.name
    console.log(this)
})
playaNiñoRata.renderName()

pieDeLaCuesta.fetch().then(function (data) {    
    this.name = data.name
})