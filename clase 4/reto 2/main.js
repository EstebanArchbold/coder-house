const Container = require("./container");

const container = new Container('./prueba.txt')

container.save({ title: 'Escuadra3', price: 123.45, thumbnail: 'https://cdn3.iconfinder.com/data/icons/education-209/64/ruler-triangle-stationary-school-256.png' })
container.getById(1)
container.getAll()
container.delete(1)
container.deleteAll()