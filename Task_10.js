//The problem was that objects are passed by reference. Thus, we should create a full copy of object.

var userJohn = {name: 'John', age: 30};
var userMike = {};

for(var key in userJohn) {
	userMike[key] = userJohn[key];
}

userMike.name = 'Mike';
console.log(userMike.name);
console.log(userJohn.name);