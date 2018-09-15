// CLOSURES 
function create() {
	var counter = 0;
	return {
		increment: function() {
			counter++;
		},
		print: function() {
			console.log(counter);
		}
	}
}
var c = create();
c.increment();
c.print(); // 1

// CALLBACKS
$("button").click(function(event) {
 	console.log("clicked: " + event.target);
});

// CALL E APLLY
function scope() {
 	console.log( this, arguments.length );
}
scope() // window, 0
scope.call("foobar", [ 1, 2 ]); // "foobar", 1
scope.apply("foobar", [ 1, 2 ]); // "foobar", 2

// CALLBACK.ADD
// Uma função de registro de amostra a ser adicionada a uma lista de retornos de chamada
var foo = function(value) {
	console.log("foo: " + value);
};

// Outra função para ser adicionada na lista
var bar = function(value) {
	console.log("bar: " + value);
};

var tes = function() {
	console.log("tes: " + value);
}

var callbacks = $.Callbacks();

// Adiciona a função "foo" na lista
callbacks.add(foo);
 
// Dispara os itens na lista
callbacks.fire("Alô");
// Outputs: "foo: hello"
 
// Adiciona uma função "bar" na list
callbacks.add(bar); 
 
// Dispara os itens na lista novamente
callbacks.fire("testando");