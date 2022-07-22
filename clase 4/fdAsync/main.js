const fs = require('fs');

fs.readFile('prueba.txt', 'utf-8', (err, data) => {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
})

fs.appendFile('prueba.txt', '\nHola Mundo', (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('Archivo creado');
    }
})

// fs.unlink('prueba.txt', (err) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log('Archivo eliminado');
//     }
// })

// fs.mkdir('prueba', (err) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log('Directorio creado');
//     }
// })

// fs.readdir('./prueba', (err, files) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(files);
//     }
// })

