function Greeter () {
}

Greeter.prototype.greeting = function () {
  return this.salutation() + " " + this.phrase();
}

Greeter.prototype.salutation = function () {
  throw new Error( "NotImplementedError" );
}

Greeter.prototype.phrase = function () {
  throw new Error( "NotImplementedError" ); 
}

function FormalGreeter () {
}

FormalGreeter.prototype = Object.create( Greeter.prototype );

FormalGreeter.prototype.salutation = function () {
  return "Hello.";
}

FormalGreeter.prototype.phrase = function () {
  return "How are you?";
}

function InformalGreeter () {
}

InformalGreeter.prototype = Object.create( Greeter.prototype );

InformalGreeter.prototype.salutation = function () {
  return "Hey!";
}

InformalGreeter.prototype.phrase = function () {
  return "How's it going?";
}