var greet = function(name) {
	var greetingPhrases = ['Hi', 'Hello', 'Aloha', 'Ahoy'];
	
	return function() {
		let greetingPhrase = greetingPhrases.shift();
		console.log(`${greetingPhrase}, ${name}`);
		greetingPhrases.push(greetingPhrase);
	}
}

var greetJohn = greet('John');

greetJohn();
greetJohn();
greetJohn();
greetJohn();
greetJohn();
greetJohn();