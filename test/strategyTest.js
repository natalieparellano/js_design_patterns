var assert = chai.assert;

describe( "Greeter", function () {  
  it( "should exist", function () {
    var greeter = new Greeter(); // npa: how to avoid duplication?

    assert.equal( 
      Object.getPrototypeOf( greeter ), 
      Greeter.prototype 
    );
  });

  it( "is initialized with a name", function () {
    var greeter = new Greeter( "Alice" );

    assert.equal( greeter.name, "Alice" );
  });

  describe( "#greet", function () {
    describe( "name is Alice", function () {
      it( "should greet informally", function () {
        var greeter = new Greeter( "Alice" );

        assert.equal( 
          greeter.greet(), 
          "Hello, Alice. How are you?"
        );
      });
    });
  });

  describe( "#greet", function () {
    describe( "name is Max", function () {
      it( "should greet informally", function () {
        var greeter = new Greeter( "Max" );

        assert.equal( 
          greeter.greet(), 
          "Hey! How's it going?"
        );
      });
    });
  });
});

describe( "FormalGreeter", function () {
  it( "should exist", function () {
    var formalGreeter = new FormalGreeter(); // npa: how to avoid duplication?

    assert.equal( 
      Object.getPrototypeOf( formalGreeter ), 
      FormalGreeter.prototype 
    );
  });

  it( "is initialized with a context", function () {
    var greeter = new Greeter( "Alice" );
    var formalGreeter = new FormalGreeter( greeter );

    assert.equal( formalGreeter.context, greeter );
  });  

  describe( "#execute", function () {
    it ( "should return the right text", function () {
      var greeter = new Greeter( "Alice" );
      var formalGreeter = new FormalGreeter( greeter );

      assert.equal( formalGreeter.greeting(), "Hello, Alice. How are you?" );
    });
  });  
});

describe( "InformalGreeter", function () {
  it( "should exist", function () {
    var formalGreeter = new InformalGreeter(); // npa: how to avoid duplication?

    assert.equal( 
      Object.getPrototypeOf( formalGreeter ), 
      InformalGreeter.prototype 
    );
  });

  it( "is initialized with a context", function () {
    var greeter = new Greeter( "Max" );
    var formalGreeter = new InformalGreeter( greeter );

    assert.equal( formalGreeter.context, greeter );
  });  

  describe( "#execute", function () {
    it ( "should return the right text", function () {
      var greeter = new Greeter( "Max" );
      var formalGreeter = new InformalGreeter( greeter );

      assert.equal( formalGreeter.greeting(), "Hey! How's it going?" );
    });
  });  
});
