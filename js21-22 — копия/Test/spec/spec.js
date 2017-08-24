var app = require('../js/pow_script.js');


describe("app", function() {
  it("pow method with correct data", function() {
  	//prepare
  	var result;

  	//act
  	result = app.pow(3,3);

  	//assert
    expect(result).toBe(27);
  });
  it("pow method with wrong data", function() {
  	//prepare
  	var result;

  	//act
  	result = app.pow(3,0);

  	//assert
    expect(result).toBe("Error");
  });
});
