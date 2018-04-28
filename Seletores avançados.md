### $( "attribute" ) - Seleciona elementos que possuam o atributo especificado com qualquer valor.

	$( "input" ).comandos  // seleciona inputs
	
### $( ":element" ) - Seleciona todos os elementos de todos os tipos.

	$( "div:button" ).comandos  //  seleciona todos os botões dentro da div
	
### $( ":not()" ) - Seleciona elementos não encontrados nos parâmetros passados.
	
	$( "input:not(:checked)" ).css("background-color","red");  //  seleciona inputs com o atributo checked falso
	
### $( ":lang()" ) - Seleciona determinada linguagem no html.

	$( "div:lang(pt-br)" ).addClass("yellow");  //  seleciona a div com o atributo lang pt-br e adiciona a classe

### $( ":disabled" ) - Seleciona elementos com o atributo disabled.

	$( "input:disabled" ).val("Input desabilitado!");  //  seleciona inputs desabilitado
	
### $( ":empty" ) - Seleciona elementos vazios.
	
	$( "p:empty" ).css("background-color","red");  //  seleciona p vazios
	
### $( ":contains(texto)" ) - Seleciona todos os elementos que possuem um determinado texto passado no parâmetro.

	$( "p:contains('Teste')" ).css("color", "red");  //  seleciona tags p que contem a palavra Teste
	
### $( ":eq(index)" ) - Seleciona o index dos elementos referenciados.

	$( "li:eq(2)" ).css("background-color","red");  //  seleciona a terceira li em uma ul
	
### $( ":odd" ) - Seleciona elementos ímpares.

	$( "tr:odd" ).css("background-color","red");  // seleciona linhas ímpares em uma tabela
	
### $( ":even" ) - Seleciona elementos pares.

	$( "tr:even" ).css("background-color","blue");  //  seleciona linhas pares em uma tabela
	
### $( ":first" ) - Seleciona o primeiro elemento de um conjunto de elementos.

	$( "p:first" ).css("background-color","blue");  //  seleciona o primeiro p
	
### $( ":last" ) - Seleciona o último elemento de um conjunto de elementos.

	$( "p:last" ).css( "background-color","blue" );  //  seleciona o último p
	
### $( ":last-child" ) - Seleciona o último filho em um nó Html.

	$( "div span:last-child" ).addClass( "color","red" );  //  seleciona o último span dentro de uma div

### $( ":only-child" ) - Seleciona todos os elementos que são filhos únicos de seus pais.

	$( "div span:only-child" ).css( "color","red" ); // seleciona apenas o span dentro de div que só tem este span
	
### $( ":only-of-type" ) - Seleciona todos os elementos que não têm irmãos com o mesma tag.

	$( "div span:only-of-type" ).css( "color","red" ); // seleciona apenas spans se não houver outros span na div
	
### $( ":gt(index)" ) - Seleciona elementos com o index maior em um conjunto de elementos.

	$( "td:gt(4)" ).css( "backgroundColor", "yellow" ); // seleciona células depois da quinta célula em uma tabela
	
### $( ":lt(index)" ) - Seleciona elementos com o index menor em um conjunto de elementos.

	$( "lt:gt(4)" ).css( "backgroundColor", "yellow" );  //  seleciona células antes da quarta célula em uma tabela
	
### $( ":nth-child(index)" ) - Seleciona elementos a partir de determinada localização.

	$( "ul li:nth-child(2)" ).css( "color", "red" );  //  seleciona o segundo li em uma ul
	
### $( ":nth-last-child(index)" ) - Seleciona elementos a partir de determinada localização do último para o primeiro.

	$( "ul li:nth-last-child(2)" ).css( "color", "red" )  //  seleciona o segundo li de baixo para cima em uma ul
	
### $( ":nth-of-type(index)" ) - Seleciona elementos do mesmo tipo em determinada localização.

	$( "span:nth-of-type(2)" ).css( "color", "red" );  //  seleciona o segundo span 
	
### $( ":nth-last-of-type(index)" ) - Seleciona elementos do mesmo tipo a partir de determinada localização do último para o primeiro.

	$("span:nth-last-of-type(2)").css( "color", "red" );  //  seleciona o segundo span de baixo para cima em uma ul	
	
### ( "option:selected" ) - Seleciona itens selecionados em um select.

	$( "select option:selected" ).comados  //  seleciona um ou mais elementos selecionados dentro de um select
	
### $( "[atribute=type]" ) - Seleciona qualquer tipo de input.
	
	$( "[input=checkbox]" ).comandos  // seleciona inputs do tipo checkbox
	
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


### $( "[attributeFilter1][attributeFilter2][attributeFilterN]" ) - Combina elementos que combinam todos os filtros de atributos especificados.

	$( "input[class][name$='en']" ).comandos  // seleciona classes com name que terminam com en
	
