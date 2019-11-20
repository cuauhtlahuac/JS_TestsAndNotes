let Car = function(color) {
  // regresamos un objeto
  let moving = false;
  return Object.assign(
    {},
    {
      color,
      drive() {
        moving = true;
        // RETURN THIS: Es para poder encadenar los metodos dandole al objeto el contexto nuevo
        // al retornar this, le decimos al objeto que moving cambio, y el siguiente objeto conocerá
        // el estado de esa variable dentro del objeto
        return this;
      },
      isMoving() {
        return moving;
      },
      stop() {
        moving = false;
        return this;
      }
    }
  );
};

let carRed = Car("red");
// carRed.drive();
console.log(carRed.drive().isMoving());
// carRed.stop();
console.log(carRed.stop().isMoving());

