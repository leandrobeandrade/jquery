### $( "[attribute|='value']" ) - Seleciona elementos que possuam o atributo especificado com um valor igual a uma string determinada ou que começa com essa seqüência seguida de um hífen (-)

	$( "input[name|='en']" ).comandos  // seleciona en, en-UK


### $( "[attribute*='value']" ) - Seleciona os elementos que possuam o atributo especificado com um valor que contém uma subtring.Exemplo:
			
	$( "input[name*='en']" ).comandos  // seleciona english, en-UK, en


### $( "[attribute^='value']" ) - Seleciona elementos que possuam o atributo especificado com um valor que começa exatamente com uma determinada string.

	$( "input[name^='en']" ).comandos  // seleciona en, english


### $( "[attribute~='value']" ) - Seleciona elementos que possuam o atributo especificado com um valor contendo uma determinada palavra, delimitada por espaços.

	$( "input[name~='en']" ).comandos  // seleciona en glish


### $( "[attribute$='value']" ) - Seleciona elementos que possuam o atributo especificado com um valor que termina exatamente com uma determinada string.A comparação é case sensitive.

	$( "input[name$='en']" ).comandos  // seleciona oficen, milkmen


### $( "[attribute='value']" ) - Seleciona elementos que possuam o atributo especificado com um valor exatamente igual a um determinado valor.

	$( "input[value='en']" ).comandos  // seleciona en


### $( "[attribute!='value']" ) - Selecione elementos que não possuam o atributo especificado ou que tenham o atributo especificado, mas não com um determinado valor.

	$( "input[name!='en']" ).comandos  // seleciona outros


### $( "[attribute]" ) - Seleciona elementos que possuam o atributo especificado com qualquer valor.

	$( "input" ).comandos  // seleciona inputs


### $( "[attributeFilter1][attributeFilter2][attributeFilterN]" ) - Combina elementos que combinam todos os filtros de atributos especificados.

	$( "input[id][name$='en']" ).comandos  // seleciona ids com name que terminam com en
	
### $( "[atribute=type]" ) - Seleciona qualquer tipo de input.
	
	$( "[input=checkbox]" ).comandos  // seleciona inputs do tipo checkbox

### $( ":element" ) - Seleciona todos os elementos de todos os tipos.

	$( ":button" ).comandos  // seleciona todos os botões

### $( ":disabled" ) - Seleciona elementos com o atributo disabled.

	$( "input:disabled" ).val("Input desabilitado!")  //  seleciona inputs desabilitado
	
### $( ":empty" ) - Seleciona elementos vazios.
	
	$( "p:empty" ).css("background-color","red");  //  seleciona p vazios
	
### $( ":eq(index)" ) - Seleciona o index dos elementos referenciados.

	$( "li:eq(2)" ).css("background-color","red");  //  seleciona a terceira li em uma ul
	
### $( ":odd" ) - Seleciona elementos ímpares.

	$( "tr:odd" ).css("background-color","red");  // seleciona linhas ímpares em uma tabela
	
### $( ":even" ) - Seleciona elementos pares.

	$( "tr:even" ).css("background-color","blue");  //  seleciona linhas pares em uma tabela
	
### $( ":first" ) - Seleciona o primeiro elemento de um conjunto de elementos.

	$( "p:first" ).css("background-color","blue");  //  seleciona o primeiro p
	
### $( ":last" ) - Seleciona o último elemento de um conjunto de elementos.

	$( "p:last" ).css("background-color","blue");  //  seleciona o último p
