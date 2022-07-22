const fs = require('fs');
let i = 1
class Container {
    constructor(route) {
        this.route = route;
    }

    async save(data) {
        try {
        let file = await fs.promises.readFile(this.route, 'utf8');
        let fileParse = JSON.parse(file);
        let lastobject = fileParse[fileParse.length - 1];
        
        fileParse.length == 0
        ? fs.promises.writeFile(this.route, JSON.stringify( [...fileParse, {...data, id: fileParse.length +1 }], null, 2))
        : await fs.promises.writeFile(this.route, JSON.stringify( [...fileParse, {...data, id: lastobject.id + 1 }], null, 2));

        } catch (error) {
            console.log(error);
        }
    }

    async getById(id) {
        try {
            let file = await fs.promises.readFile(this.route, 'utf8');
            let fileParse = JSON.parse(file);
            let object = fileParse.find(obj => obj.id == id);
            console.log(object);
        } catch (error) {
            return null;
        }
    }

    async getAll() {
        try {
            let file = await fs.promises.readFile(this.route, 'utf8');
            let fileParse = JSON.parse(file);
            console.log(fileParse);
        } catch (error) {
            return error;
        }
    }

    async delete(id) {
        try {
            let file = await fs.promises.readFile(this.route, 'utf8');
            let fileParse = JSON.parse(file);
            let object = fileParse.find(obj => obj.id == id);
            if(object) {
                let newFile = fileParse.filter(obj => obj.id != id);
                await fs.promises.writeFile(this.route, JSON.stringify(newFile, null, 2));
            }

        } catch (error) {
            return error;
        }
    }

    async deleteAll() {
        try {
            await fs.promises.writeFile(this.route, JSON.stringify([], null, 2));
        } catch (error) {
            return error;
        }
    }
}

module.exports = Container;