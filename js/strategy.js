function Greeter ( name ) {
  this.name = name;
}

Greeter.prototype.greet = function () {
  if ( this.name === "Alice" ) {
    return new FormalGreeter( this ).greeting();
  } else {
    return new InformalGreeter( this ).greeting();
  }
}

function FormalGreeter ( context ) {
  this.context = context;
}

FormalGreeter.prototype.name = function () {
  return this.context.name;
}

FormalGreeter.prototype.greeting = function () {
  return "Hello, " + this.name() + ". How are you?";
}

function InformalGreeter ( context ) {
  this.context = context;
}

InformalGreeter.prototype.name = function () {
  return this.context.name;
}

InformalGreeter.prototype.greeting = function () {
  return "Hey! How's it going?";
}