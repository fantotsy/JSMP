var john = {
	name: 'John',
	greet(greeting) {
    	return function() {
        	alert(`${greeting}, ${john.name}`);
        }
    }
};

var greetJohn = john.greet('Aloha');
greetJohn();