var outputCarWithDefault = function(car) {
	let wheels = car.hasOwnProperty('wheels') ? car.wheels : 4;
	console.log(`Make: ${car.name}, wheels: ${wheels}`);
}

outputCarWithDefault({name: 'Ford'});
outputCarWithDefault({name: 'Ford', wheels: 6});