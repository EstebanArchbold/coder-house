class User {
    constructor(name, lastName, book, pet) {
        this.name = name;
        this.lastName = lastName;
        this.book = book;
        this.pet = pet;
    }

    getFullName() {
        return `${this.name} ${this.lastName}`;
    }

    addPet(...param) {
        this.pet.push(...param)
        // return user.pet
    }

    countPet() {
        return this.pet.length
    }

    addBook(name, author) {
        return this.book.push({ name: name, author: author })
    }

    getBookNames() {
        return this.book.map(book => book.name)
    }

}

const user = new User('Juan', 'Perez', [], []);

console.log(user.getFullName())

user.addPet("Perro", "Gato")
console.log(user.pet)

console.log(user.countPet())

user.addBook("El señor de los anillos", "J.R.R. Tolkien", )
console.log(user.book)

console.log(user.getBookNames())

