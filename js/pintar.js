var v1 = 0;
var v2 = 0;
var dado = [0,0,0,0,0,0,0,0]
		  //1,2,3,4,5,6,7,8	

function lanzar()
{
	limpiar();

	var valor = Math.floor((Math.random() * 6) + 1);
	alert(valor);

	if(valor == 1)
	{
		dado[4] = 1;		
	}
	if(valor == 2)
	{
		dado[0] = 1;		
		dado[8] = 1;		
	}
	if(valor == 3)
	{
		dado[0] = 1;		
		dado[4] = 1;		
		dado[8] = 1;		
	}
	if(valor == 4)
	{
		dado[0] = 1;		
		dado[2] = 1;		
		dado[6] = 1;		
		dado[8] = 1;		
	}
	if(valor == 5)
	{
		dado[0] = 1;		
		dado[2] = 1;		
		dado[4] = 1;		
		dado[6] = 1;		
		dado[8] = 1;		
	}
	if(valor == 6)
	{
		dado[0] = 1;		
		dado[1] = 1;		
		dado[2] = 1;		
		dado[6] = 1;		
		dado[7] = 1;		
		dado[8] = 1;		
	}

	var tabla = document.getElementById("indicador");
	var tabla1 = document.getElementById("indicador_1");

	if(tabla.value == 1 && tabla1.value == 0)
	{
		v1 = valor;
		alert("Valor del jugador 1: "+v1);
		pintar();
		tabla1.value = 1;
		tabla.value = 0;
	}
	else if(tabla.value == 0 && tabla1.value == 1)
	{
		v2 = valor;
		alert("Valor del jugador 2: "+v2);
		pintar1();
		tabla1.value = 0;
		tabla.value = 1;
	}

	var mensaje= document.getElementById("mensaje");
	if(v1 > v2)
	{
		mensaje.value="Gana 1";
	}
	else if(v2 > v1)
	{
		mensaje.value="Gana 2";
	}
	else
	{
		mensaje.value="Empate";
	}
}

function limpiar()
{
	for ( i in dado)
	{
		dado[i] = "0";
	}
}

function pintar()
{
	var lugar = [document.getElementById("0"),
			     document.getElementById("1"),
				 document.getElementById("2"),
				 document.getElementById("3"),
				 document.getElementById("4"),
				 document.getElementById("5"),
				 document.getElementById("6"),
				 document.getElementById("7"),
				 document.getElementById("8"),	
				];
	for (i in dado)
	{
		if(dado[i] == 1)
			lugar[i].value = "*";
		else if(dado[i] == 0)
			lugar[i].value = "";
	}		
}

function pintar1()
{
	var lugar = [document.getElementById("00"),
			     document.getElementById("01"),
				 document.getElementById("02"),
				 document.getElementById("03"),
				 document.getElementById("04"),
				 document.getElementById("05"),
				 document.getElementById("06"),
				 document.getElementById("07"),
				 document.getElementById("08"),	
				];
	for (i in dado)
	{
		if(dado[i] == 1)
			lugar[i].value = "*";
		else if(dado[i] == 0)
			lugar[i].value = "";
	}		
}