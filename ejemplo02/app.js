function sumar(n1,n2){
    document.getElementById('resultado').value = Number(n1) + Number(n2);
}

function restar(n1,n2){
    document.getElementById('resultado').value = Number(n1) - Number(n2);
}

function multiplicar(n1,n2){
    document.getElementById('resultado').value = Number(n1) * Number(n2);
}

function dividir(n1,n2){
    document.getElementById('resultado').value = Number(n1) / Number(n2);
}



/* ANOTACIONES:
- el nombre de la función debe ser lo más descriptiva posible
- n1 y n2 son variables génericas, tomado cualquier número que ingrese 
- se le puede pasar o no parámetros,en este caso son necesarios
- se usa .value y no innerHTML, porque al ser input de autocierre no se puede escribir contenido entre la etiqueta de apertura y de cierre
- para traer los números ingresados en los input se trabaja con get element by id
- con Number podré sumar los número  ingresados, de lo contrario sería solo concatenación (meme calculadora jaj)
- los valores ingresados en los input viaja siempre string, aunque sea un número, por lo que por esta razón se utiliza Number()
*/


/*
- para crear una fx se ocupa la palabra reservada function seguido del nombre que le asignemos a esa fx, debe ser lo más descriptiva posible.
- Js cuando se empieza a ejecutar toma todas las variables y las crea, luego hace lo mismo con las fx que hay dentro del código, pero no se están ejecutando. estás deben ser invocadas o llamadas, y se llaman escribiendo su nombre y (), ej sumar()
- si la fx tiene parámetros(que son varibles) deben estar escritos y al momento de invocar se le pasan valores
-ej:


function sumar(n1,n2){
    console.log(n1+n2)
}
sumar(5,4)
sumar(13,28)

- n1 y n2, se crea en ese momento y puede ser cualquier palabra
- 5 va subir o volar y se va a posicionar dentro de n1

-no todas las fx reciben parámetros, no son obligatorios, serán necesarios cuando necesite info del exterior
ej:

function myFuction(){
    console.log('Martín Calcetín')
}

- quiero imprimir un nombre y como este siempre va ser el mismo, no se le pasa parámetro
-la fx no necesita información del exterior para ejecutarse  esa es la razón e que no se le pasa parámetros

- al input para agregar el texto desde js se trabaja con el atributo value de la etiqueta input en el HTML, que es el que guarda el valor de la caja
-vscode no recomienda value, sino que otros. solo hay que escribirlo toda la palabra en minúscula
- no importa el type del input, ya que el valor va viajar como texto aunque sea un número ya que irá entre "" y será un string. por lo que los valores llegan a la fx al archivo js llegan como texto. para corroborar el tipo se puede hacer lo siguiente

function sumar(n1,n2){
    console.log(typeof(n1))
    console.log(typeof(n2))
}

- y en consola sale escrito string , para ambos casos
- para poder sumar los números ingresados en los input,y que llegan comostring, yo debo transformarlos a números. se utiliza number(aquí va lo que quiero transf)

*/

/*
DUDAS:
1)los parámetros estaban muertos, pero cuando los escribí dentro de Number se activaron. por qué pasa eso??
*/