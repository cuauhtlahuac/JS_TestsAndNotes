// Como construir un mixin?

const cereales = {
  chispasChocolate() {
    return true;
  }
};

const cubiertas = {
  fresa() {
    return true;
  }
};

const sunDayIngredientes = {
  chocolate() {
    return true;
  }
};
// Aquí se mezclan los ingredientes
const helado = Object.assign({}, cereales, cubiertas);
const sunDay = Object.assign({}, helado, sunDayIngredientes);
// console.dir(helado);
// console.dir(sunDay);

console.log(sunDay.chispasChocolate());
console.log(sunDay.vainilla());
console.log(sunDay.chocolate());
