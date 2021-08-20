function loop(array) {
  //el loop se ejecuta hasta que el index es mayor que array.length
  for (let i = 0; i < array.length; i += 1) {
    // cada loop se agrega un segundo  a set timeout así se logra el efecto de segundero
    setTimeout(() => console.log(array[i]), i * 1000);
  }
}
const ARRAY_FILL = 60;
const array = new Array(60).fill(0).map((d, i) => i + 1);

loop(array);
// este código se ejecuta justo despues de un minuto
setInterval(loop, ARRAY_FILL * 1000 + 3000, array);
