// En este caso una promesa se ejecuta si la anterior fue exitosa
let cleanRoom = function(isClean) {
  let clean = isClean;
  return new Promise(function(resolve, reject) {
    if (clean) {
      resolve("Cleaned the room");
    } else {
      reject("room not cleaned");
    }
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

cleanRoom(false)
  .then(function(result) {
    // al llamar y retornar remove garbage se crea una nueva promesa
    return removeGarbage(result);
  })
  .then(function(result) {
    return winIceCream(result);
  })
  .then(function(result) {
    console.log("Congrats, you finished and win an ice cream ..." + result);
  })
  .catch(e => {
    console.error("Error: " + e);
  });

/*
! OTRA MANERA DE LLAMAR UNA PROMESA UN POCO CONFUSA.
cleanRoom().then(function(result) {
 * al llamar y retornar remove garbage se crea una nueva promesa
  return removeGarbage(result).then(function(result) {
    return winIceCream(result).then(function(result) {
      console.log("Congrats, you finished and win an ice cream ..." + result);
    });
  });
});
*/
