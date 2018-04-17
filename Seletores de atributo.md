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

### $( ":button" ) - Seleciona todos os botões de todos os tipos ná página.

	$( ":button" ).comandos  // seleciona todos os botões.

### $( ":disabled" ) - Seleciona elementos com o atributo disabled.

	$( "input:disabled" ).val("Input inválido!")  //  seleciona inputs inválidos
