// Vamos a llamar las promesas en un solo paso

let cleanRoom = function(isClean) {
  let clean = isClean;
  return new Promise(function(resolve, reject) {
    // console.log("Promise clean the room");
    if (clean) {
      resolve("Cleaned the room");
    } else {
      reject("room not cleaned");
    }
  });
};

let removeGarbage = function(message) {
  return new Promise(function(resolve, reject) {
    // console.log("Promise remove garbage");
    setTimeout(resolve, 2000, message + " Remove Garbage");
  });
};

let winIceCream = function(message) {
  return new Promise(function(resolve, reject) {
    // console.log("Promise winner");
    resolve(message + " Won ice cream");
  });
};
// Se le pasa un array con todas las promesas, ejecuta el callback si  todas las promesas son cumplidas
Promise.all([
  removeGarbage("- Cosquis "),
  winIceCream("- to yeyo"),
  cleanRoom(true)
])
  .then(function(message) {
    console.log("all promises done: " + message);
  })
  .catch(e => {
    console.error("Fail: " + e);
  });
//race Devuelve una promesa que se cumple o rechaza tan pronto como una(la más rápida) de las promesas  del iterable se resuelve ó rechaza, con el valor o razón de esa promesa.
Promise.race([
  removeGarbage("- Cosquis "),
  cleanRoom(true),
  winIceCream("- to yeyo")
])
  .then(function(message) {
    console.log("One promises done: " + message);
  })
  .catch(e => {
    console.error("Fail: " + e);
  });
