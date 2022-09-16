function datos() {
   let nombre = document.getElementById('name_').value;

   let apellido = document.getElementById('lastName').value;

   let apellido2 = document.getElementById('lastName2').value;

   let nacimiento = document.getElementById('birth').value;

   let fecha = new Date(nacimiento);
   let fecha_format = fecha.getDate() + 1 + '-' + (fecha.getMonth() + 1) + '-' + fecha.getFullYear();

   let pais = document.getElementById('country').value;

   document.getElementById('data').innerHTML = `<h1> Datos Personales</h1> Nombre : <strong> ${nombre} ${apellido} ${apellido2} </strong> <br><br>
   Fecha de  Nacimiento : ${fecha_format} <br><br>
   Nacionalidad : ${pais}  `;

}



//usar nombres variables descriptivos, que al momento de ller el código tú u otra persona ya entienda de qué se trata
//

//  let inputValue = document.getElementById('name').value;
//  document.getElementById('data').innerHTML = inputValue;