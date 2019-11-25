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
makeRequest('Google')
	.then((response) => {
		console.log('Response Received');
		return processRequest(response);
	})
	.then((processedResponse) => {
		console.log(processedResponse);
	})
	.catch((err) => {
		console.log(err);
	});
