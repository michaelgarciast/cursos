// let frutas = ['manzana', 'peras', 'Platano', 'Cereza'];

// let masFrutas = frutas.push('Uvas');

// let ultimaPosicion = frutas.pop('Uvas');

// let nuevaLongitud = frutas.unshift('Uvas');

// // let borrarFrutas = frutas.shift('Uvas');

// let borrarFrutas = frutas.shift('Manzanas');

// console.log(frutas);

// let listadoEstudiantes = ['Maria', 'Steven', 'Brayan', 'Karen', 'Tatiana'];

// function nombrarEstudiantes(listadoEstudiantes) {
//   console.log(`Hola, ${listadoEstudiantes}`);
// }

// // for (let i = 0; i < listadoEstudiantes.length; i++) {
// //   console.log(nombrarEstudiantes(listadoEstudiantes[i]));
// //   //   let agregarNombre = listadoEstudiantes.push('Giovanny');
// // }

// // for (estudiante of listadoEstudiantes) {
// //   nombrarEstudiantes(estudiante);
// // }

// while (listadoEstudiantes.length > 0) {
//   console.log(listadoEstudiantes);
//   let estudiante = listadoEstudiantes.shift();
//   nombrarEstudiantes(estudiante);
//   console.log('Hola mundo');
// }

//Objects
const marca = ['Duke 250', 'Pulsar 200', 'R15 250'];

const modelo = ['KTM', 'BAJAB', 'YAMAHA'];

const ano = [2020, 2023, 2019];

function motos(marca, modelo, ano) {
  this.marca = marca;
  this.modelo = modelo;
  this.ano = ano;
}

for (let i = 0; marca.length > i && modelo.length > i && ano.length > i; i++) {
  const motosNuevas = new motos(marca[i], modelo[i], ano[i]);
  console.log(motosNuevas);
}
