// Fibonacci with Memoization
/*
La sucesión comienza con los números 0 y 1,2​ a partir de estos, «cada término es la suma de los dos anteriores
*/
function fib(n, prevValue = []) {
	if (prevValue[n] != null) {
		return prevValue[n];
	}
	let result;
	if (n <= 2) {
		return 1;
	} else {
		result = fib(n - 1, prevValue) + fib(n - 2, prevValue);
	}
	prevValue[n] = result;
	return result;
}

console.log(fib(500));
