//  código opción2


function sumar(n1,n2){
     
    document.getElementById('resultado').value = '0';
    // es para que la caja del resultado quede limpia cada vez que se presiona el btón sumar, poniendo un cero. se debe escribir el número entre '', ya que js no lo toma si se pasa directo
    // si ejecuta bien el código el cero es reemplazado por la suma, si sale mal la caja va quedar con cero, sin el resultado anterior 
    //String(0)
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
