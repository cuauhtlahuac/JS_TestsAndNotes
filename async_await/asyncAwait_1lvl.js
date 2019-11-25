// Async Await is just syntactic sugar of promises

function makeRequest(location) {
	return new Promise((resolve, reject) => {
		console.log('Making request to ' + location);
		if (location === 'Google') {
			resolve('Google says hi');
		} else {
			reject('We can only talk to google');
		}
	});
}
function processRequest(response) {
	return new Promise((resolve, reject) => {
		console.log('processing request');
		resolve('Extra information: ' + response);
	});
}
// Using Promises
// makeRequest('Google')
// 	.then((response) => {
// 		console.log('Response Received');
// 		return processRequest(response);
// 	})
// 	.then((processedResponse) => {
// 		console.log(processedResponse);
// 	})
// 	.catch((err) => {
// 		console.log(err);
// 	});

// Using Async Await
// first we create a function with keyword async
async function doWork() {
	// Use try catch to handle errors
	try {
		const response = await makeRequest('Google');
		console.log('Response Received');
		const processResponse = await processRequest(response);
		console.log({ processResponse });
	} catch (e) {
		console.log('error: ' + e);
	}
	// Await says: the code await until the function has finish,
	// after work execute the next thing
}
doWork();
