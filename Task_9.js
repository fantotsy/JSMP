Object.prototype.toString = function() {
	return this.name;
}

var john = { name: 'John', surname: 'Johnson' };
console.log(`${john}`);