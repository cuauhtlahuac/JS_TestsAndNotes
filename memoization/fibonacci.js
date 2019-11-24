// Fibonacci with Memoization
/*
La sucesión comienza con los números 0 y 1,2​ a partir de estos, «cada término es la suma de los dos anteriores
*/
function fib(n) {
	if (n <= 2) return 1;
	return fib(n - 1) + fib(n - 2);
}

console.log(fib(2))