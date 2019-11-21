let cleanRoom = function() {
  return new Promise(function(resolve, reject) {
    resolve("Cleaned the room");
  });
};

let removeGarbage = function(message) {
  return new Promise(function(resolve, reject) {
    resolve(message + " Remove Garbage");
  });
};

let winIceCream = function(message) {
  return new Promise(function(resolve, reject) {
    resolve(message + " Won ice cream");
  });
};

cleanRoom()
  .then(function(result) {
    // al llamar y retornar remove garbage se crea una nueva promesa
    return removeGarbage(result);
  })
  .then(function(result) {
    return winIceCream(result);
  })
  .then(function(result) {
    console.log("Congrats, you finished and win an ice cream ..." + result);
  });
