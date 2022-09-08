var nombre = "Pedro Pablo";
var apellido = "Pérez";
var apellido2 = "Pereira";
var nombreCompleto = "Pedro Pablo Pérez Pereira";
var edad = 45;
var oficio = "Pintor";

// = operador asignación, distinto a = = igual qué?

//document.write(nombreCompleto);
//  lo que este dentro () será lo que se imprime por pantalla.
//El operador de punto se utiliza para acceder a un elemento de una estructura.

//document.write(nombreCompleto + " " + edad);// concatenación
//document.write(`${nombreCompleto} tiene ${edad} años. `); //template string

document.write(`<h2>Trabalengua</h2>`);
document.write(
  `<p>${nombre} ${apellido} ${apellido2} pobre ${oficio} portugues, pinta paisajes por poca plata para pasear por París </p>`
);


/*var titulo = document.getElementById("titulo");
titulo.innerHTML = nombreCompleto;*/

//document.getElementById("titulo").innerHTML = nombreCompleto;
document.getElementById(
  "titulo"
).innerHTML = `${nombreCompleto} es un gran ${oficio}`;


function myFunction() {
  document.getElementById("titulo").style.color = "red";
}


/* tomado de pokegoogle
document.getElementById("data").innerHTML =
"Bienvenido " + localStorage.getItem("name") + " maestro Pokémon";
*/

/* 
DUDAS:  
1) document get element tiene que ir dentro de una variable y no así document write, por qué?, se podría o no es necesario-RP: puede ir o no en una variable
2) .innerHTMl, para buscar otras- RP: ejemplo .value, esta servirá para cambiar el valor dentro de input, que no serviría con el .innerHTML
3) se lee de izq a dcha o de dcha a izq?? - RP: para ambos lados, no hay problema
4) tengo un problema con los nombres, al repetir la palabra por ej linea 23 y 24, eso era peor con las funciones
*/
