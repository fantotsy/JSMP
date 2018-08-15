Object.prototype.setName = function(name) {
	this.name = name;
}

const a = {};
a.setName('John');
alert(a.name);