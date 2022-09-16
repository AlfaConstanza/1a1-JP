
function verificarEdad(){
    let m_e = 18;
    let edad = document.getElementById('edad').value;

    let comparacion = Number(edad) >= m_e;
    console.log(comparacion);

    if(Number(edad) >= m_e){
        alert('Eres mayor de edad')
    }else{
        alert('No eres mayor de edad, no puedes ingresar')
    }
}




/*let m_e = 18;
let edad = 12;

if(edad >= m_e){
    alert('Eres mayor de edad')
}else{
    alert('No eres mayor de edad, no puedes ingresar')
}

aquí yo le estoy dando los valores directamente
*/


/* 
OPERADORES DE COMPARACIÓN:
==
símbolo exclamación hacia abajo=
<
>
<=
>=

el if(si) al estar fuera de la fx se va a ajecutar cuando se abra la pág.
else (sino)

cuando el operador = está antes del .value, estamos sacando un valor
cuando el operador = está dps del .value, estamos agregando/estableciendo un valor

en la comparación js toma el número ingresado en el onput, el cual es un string lo convierte para poder comparar. pero para asegurarnos usamos number() 

el if verifica los resultados con valores true o false, por consola
ejemplo:
let comparacion = Number(edad) >= m_e;
console.log(comparacion);

APRENDER A FILTRAR INFO DE INTERNET
PRIMERO EL LENGUAJE Y LO QUE QUEREMOS
 javascript verificar si es número


*/