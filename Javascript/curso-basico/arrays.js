let frutas = ['manzana', 'peras', 'Platano', 'Cereza'];

let masFrutas = frutas.push('Uvas');

let ultimaPosicion = frutas.pop('Uvas');

let nuevaLongitud = frutas.unshift('Uvas');

// let borrarFrutas = frutas.shift('Uvas');

let borrarFrutas = frutas.shift('Manzanas');

console.log(frutas);

let listadoEstudiantes = ['Maria', 'Steven', 'Brayan', 'Karen', 'Tatiana'];

function nombrarEstudiantes(listadoEstudiantes) {
  console.log(`Hola, ${listadoEstudiantes}`);
}

// for (let i = 0; i < listadoEstudiantes.length; i++) {
//   console.log(nombrarEstudiantes(listadoEstudiantes[i]));
//   //   let agregarNombre = listadoEstudiantes.push('Giovanny');
// }

// for (estudiante of listadoEstudiantes) {
//   nombrarEstudiantes(estudiante);
// }

while (listadoEstudiantes.length > 0) {
  console.log(listadoEstudiantes);
  let estudiante = listadoEstudiantes.shift();
  nombrarEstudiantes(estudiante);
  console.log('Hola mundo!');
}
