// var objPersona = {
//   nombre: "Guille",
//   edad: 22,
//   ciudad: "Montevideo"
// };

// console.log(objPersona.nombre);
// console.log(objPersona.ciudad);
// console.log(objPersona.edad);
//                      MI PRIMER OBJETO

// var nave = {};

// (nave["tipo de nave"] = "espacial"),
//   (nave.pais = "argentina"),
//   (nave["cantidad de tripulantes"] = 25),
//   (nave.tripulantes = ["ivo", "ezequie.", "nico"]);
// nave.fn = despegar;
// nave.estado = "usada";

// function despegar() {
//   console.log("Despegue en 3, 2, 1 … OH NO, ESPEREN, ALGO SE ROMPIÓ");
//   alert("Boooooom");
// }

// console.log(nave.pais);
// console.log(nave["tipo de nave"]);
// var cantTrip = nave["cantidad de tripulantes"];
// console.log(cantTrip);
// var test = ["estado"];

// console.log(test.estado);
// console.log(test["estado"]);

// console.log(nave.fn());

//                      MI AUTO

// var mi_auto = {};

// mi_auto.marca = "tesla";
// mi_auto.anio = 1999;
// mi_auto.nuevo = true;

// var property_key = "modelo";
// mi_auto.property_key = "el mejor modelo";

// var anotherpropertykey = "precio";
// mi_auto.anotherpropertykey = 15000;

// // console.log(mi_auto[property_key]);  UNDEFINED
// // console.log(mi_auto["modelo"]);      UNDEFINED

// var next_property = ["color"];
// mi_auto.next_property = "verde";

// //console.log(mi_auto[next_property]);  UNDEFINED
// //console.log(mi_auto["color"]);        UNDEFINED

// for (var key in mi_auto) {
//   if (mi_auto.hasOwnProperty(key)) {
//     console.log(key + ":" + mi_auto[key]);
//   }
// }

//                      NUMEROS DUPLICADOS

// var numeros = [2, 4, 5, 37, 0]
// var numeros_duplicados = {}

// for (var i = 0; i < numeros.length; i++) {
//     numeros_duplicados[numeros[i]] = numeros[i] * 2
// }
// console.log(numeros_duplicados);

//                      POLITICOS

// var favorites = []
// var famous = ['alex smith', 'amy whinehouse', 'cameron diaz', 'brad pitt', 'ashton kutcher', 'mark whalberg', 'morgan freeman', 'mila kunis']
// var obama_jobs = []
// var politicos = {
//   secretary_of_state: 'hillary clinton',
//   potus: 'barack obama',
//   flotus: 'michelle obama',
//   vice_prez: 'joe biden',
//   gov_of_california: 'jerry brown'
// }

// for (var key in famous) {
//     if (famous[key][0] == 'a') {
//         favorites.push(famous[key])
//     }
// }

// for (var key in politicos) {
//     famous.push(politicos[key])
// }

// for (var key in politicos) {
//     obama_jobs.push(key)
// }

// var b_named_politicos = {}

// for(var key in politicos){
//     var nombre = politicos[key].split(" ")
//      if (/*politicos[key].split(" ")[0][0] == 'b' || politicos[key].split(" ")[1][0] == 'b'*/
//          nombre[0][0] === 'b' || nombre[1][0] === 'b') {
//         b_named_politicos[key] = politicos[key]        
//     }
// }

// var reverse_politico_lookup = {}

// for (var key in politicos) {
//     reverse_politico_lookup[politicos[key]] = key
// }

//                      BASE DE DATOS DE PELICULAS

// var arreglo = [
//     {
//         titulo:"Busqueda implacable",
//         rating:"5 estrellas",
//         loHasVisto:"Has visto"
//     },
//     {
//         titulo:"Norbit",
//         rating:"3 estrellas",
//         loHasVisto:"No has visto"
//     },
//     {
//         titulo:"Mini espias",
//         rating:"2 estrellas",
//         loHasVisto:"Has visto"
//     },
//     {
//         titulo:"La vida es bella",
//         rating:"5 estrellas",
//         LoHasVisto:"No has visto"
//     }
// ]

// for (var i = 0; i < arreglo.length; i++) {;
//     console.log(arreglo[i]);
// }