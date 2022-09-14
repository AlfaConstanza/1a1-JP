//las funciones y la analogía de la máquina de moler carne M
/* 
función isNaN()
true para un valor NaN - ingreso letras
false para un valor numérico

como n1 es false pasa al else y aquí debemos verficar el n2 antes de hacer la operación, por lo que debo preguntar de nuevo con if, pero ahora con n2.
cuando n2 se comprueba que es un número, solo ahí se ejecuta la operación matemática.
si algunos de los números no es correcto, la suma no se realiza y el código no se ejecuta (L.16) 
*/

//  CÓDIGO OPCIÓN 1

function sumar(n1, n2) {
    //es para dejar la cajita resultado en 0
    document.getElementById('resultado').value = 0;
    if (isNaN(n1)) {
        //n1 no es número
        alert('El primer número ingresado es incorrecto')
    } else {
        // n1 es número, por lo que pasa a esta segunda parte
        if (isNaN(n2)) {
            //n2 no es número
            alert('El segundo número ingresado es incorrecto')
        } else {
            //n2 es número
            document.getElementById('resultado').value = Number(n1) + Number(n2);
        }
    }
}

function restar(n1, n2) {

    document.getElementById('resultado').value = '0';

    if (isNaN(n1)) {
        alert('El primer número ingresado es incorrecto')
    } else {
        if (isNaN(n2)) {
            alert('El segundo número ingresado es incorrecto')
        } else {
            document.getElementById('resultado').value = Number(n1) - Number(n2);
        }
    }
}

function multiplicar(n1, n2) {

    document.getElementById('resultado').value = String(0);

    if (isNaN(n1)) {
        alert('El primer número ingresado es incorrecto')
    } else {
        if (isNaN(n2)) {
            alert('El segundo número ingresado es incorrecto')
        } else {
            document.getElementById('resultado').value = Number(n1) * Number(n2);
        }
    }
}


function dividir(n1, n2) {

    document.getElementById('resultado').value = 0;

    if (isNaN(n1)) {
        alert('El primer número ingresado es incorrecto')
    } else {
        if (isNaN(n2)) {
            alert('El segundo número es incorrecto');
        } else {
            if (Number(n2) === 0) {
                alert('El segundo número ingresado, NO puede ser CERO');
            } else {
                document.getElementById('resultado').value = Number(n1) / Number(n2);
            }

        }
    }
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

document.getElementById('resultado').value = '0';
     es para que la caja del resultado quede limpia cada vez que se presiona el btón sumar, poniendo un cero. se debe escribir el número entre '', ya que js no lo toma si se pasa directo
     si ejecuta bien el código el cero es reemplazado por la suma, si sale mal la caja va quedar con cero, sin el resultado anterior 
    tambien se puede escribir así String(0) ó '0'

- if verdadero
-else falso
*/

/*
DUDAS:
1)los parámetros estaban muertos, pero cuando los escribí dentro de Number se activaron. por qué pasa eso??
RP: porque no se están usando, y la fx puede funcionar sin problemas.


*/
