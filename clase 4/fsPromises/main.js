const fs = require('fs');

// //leer un archivo con promesas

// function readFile(params) {
//     fs.promises.readFile('./prueba.txt', 'utf-8')
//     .then(contain => {
//         console.log(contain);
//     })
//     .catch(err => console.log('errror', err));
// }

// readFile();

// //lleer con async/await

// async function readFile1() {
//     try {
//         const container = await fs.promises.readFile('./prueba.txt', 'utf-8')
//         console.log(container);
//     } catch (err) {
//         console.log('errror', err);
//     }
// }

// readFile1();

// // con funcion tipo flecha

// const readFile2 = async () => {
//     try {
//         const container1 = await fs.promises.readFile('./prueba.txt', 'utf-8')
//         console.log(container1);
//     } catch (err) {
//         console.log('errror', err);
//     }
// }

// readFile2();

//escribir archivo con promesas

// const writeile = async () => {
//     try {
//         await fs.promises.writeFile('./prueba.txt', 'Hola Esteban', 'utf-8')
//     } catch (err) {
//         console.log('errror', err);
//     }
// }

// writeile()

//agregar texto a un archivo con promesas
// appendFile();
// async function appendFile() {
//     try {
//         await fs.promises.appendFile('./prueba.txt', '\n Hola como estas', 'utf-8')
//     } catch (err) {
//         console.log('errror', err);
//     }
// }

//renombrar un archvio con promesas 



// async function reameFile() {
//     try {
//         await fs.promises.rename('./prueba.txt', './prueba2.txt')
//     } catch (err) {
//         console.log('errror', err);
//     }
// }

// reameFile();

