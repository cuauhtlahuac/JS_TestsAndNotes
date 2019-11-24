// How to create a promise
// we use the object promise, and passing a callback function
// with two parameters, resolve and reject
let p = new Promise((resolve, reject) => {
	let a = 1 + 1;
	if (a == 3) {
		// you can pass anything that you want
		resolve('Success ' + a);
	} else {
		reject('Fail ' + a);
	}
});

p
	// any thing inside of the dot then is going to run for resolve
	//then always take a method, and take a single parameter,
	// in our case will be the resolve parameter with string Success, we call message.
	.then((message) => {
		console.log('this is in the then', message);
	})
	// this will catch the error and passing the reject data in the parameter
	.catch((fail) => {
		console.log('this is in the catch', fail);
	});
