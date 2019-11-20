// Function Mixin toma un objeto como argumento, copia los metodos dentro del objeto y retorna un nuevo objeto
// Vamos a crear un Superhumano

const humanFactory = function(obj) {
  let isCrying = false;
  return Object.assign({}, obj, {
    cry() {
      isCrying = true;
      return this;
    },
    isCrying() {
      return isCrying;
    }
  });
};

const flyFactory = function(obj) {
  let isFlying = false;
  return Object.assign({}, obj, {
    fly() {
      isFlying = true;
      return this;
    },
    isFlying() {
      return isFlying;
    }
  });
};

//creamos al superhumano

const superman = humanFactory(flyFactory({}));
console.log(
  superman
    .fly()
    .cry()
    .isFlying()
);
console.log(superman.isCrying());
