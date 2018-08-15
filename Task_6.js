function Calculator(){
	
}

Calculator.prototype = {
    add: function(firstValue, secondValue) {
    	return firstValue + secondValue;
    },
    
    fibonacci: function(num) {
    	if (num <= 2) {
        	return 1;
        }
  		return this.fibonacci(num - 1) + this.fibonacci(num - 2);
    }
}

var calculator = new Calculator();
alert(calculator.add(5, 5));
alert(calculator.fibonacci(10));