// var chai = require("chai"); // Node.js
var assert = chai.assert;

describe( "Greeter", function () {  
  it( "should exist", function () {
    var greeter = new Greeter(); // npa: how to avoid duplication?

    assert.equal( 
      Object.getPrototypeOf( greeter ), 
      Greeter.prototype 
    );
  });

  describe( "#greeting", function () {
    // npa: since the helper methods are abstract on the parent class, 
    //   calling #greeting directly on an instance of Greeting will never work
    // it ( "should return text", function () {
    //   var greeter = new Greeter(); 

    //   assert.equal( 
    //     typeof( greeter.greeting() ), 
    //     "string"
    //   );      
    // });
  });

  describe( "#salutation", function () {
    it ( "should throw an error", function () {
      var greeter = new Greeter(); 

      assert.throws( greeter.salutation, Error ); 
    });
  });

  describe( "#phrase", function () {
    it ( "should throw an error", function () {
      var greeter = new Greeter(); 

      assert.throws( greeter.phrase, Error ); 
    });
  });
});

describe( "FormalGreeter", function () {
  it( "should exist", function () {
    var greeter = new FormalGreeter(); // npa: how to avoid duplication?

    assert.equal( 
      Object.getPrototypeOf( greeter ), 
      FormalGreeter.prototype 
    );
  });

  describe( "#greeting", function () {
    it ( "should return the right text", function () {
      var greeter = new FormalGreeter(); 

      assert.equal( greeter.greeting(), "Hello. How are you?" );
    });
  });  
});

describe( "InformalGreeter", function () {
  it( "should exist", function () {
    var greeter = new InformalGreeter(); // npa: how to avoid duplication?

    assert.equal( 
      Object.getPrototypeOf( greeter ), 
      InformalGreeter.prototype 
    );
  });

  describe( "#greeting", function () {
    it ( "should return the right text", function () {
      var greeter = new InformalGreeter(); 

      assert.equal( greeter.greeting(), "Hey! How's it going?" );
    });
  });  
});