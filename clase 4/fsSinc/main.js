const fs = require('fs');

try {
    const date = new Date().toString();
    fs.writeFileSync('fyh.txt', date, 'utf-8');

    //leer el archivo

    const archivo = fs.readFileSync('fyh.txt', 'utf-8');
    console.log(archivo);

} catch (error) {
    console.log(error);
}