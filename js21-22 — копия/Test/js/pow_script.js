var app = {
	pow: function(a, b) {
		if (b == 0){
			console.log("wrong power");
			return "Error";
		}
		var result = 1;
		for (b; b > 0; b--) {
			result *= a;
		}
		return result;
	}
}



module.exports = app;
